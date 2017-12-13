import './index.scss';
import React from 'react';

const CryptoJS = require('crypto-js');
import 'font-awesome/scss/font-awesome.scss';

const $ = require('jquery');
import 'bootstrap/dist/js/bootstrap';
import 'bootstrap/dist/css/bootstrap.css';
import {Redirect} from 'react-router-dom';

import {getMyMIME} from '../../../service/fileHelper';

let FileName = (props) => {
    if (!props.filename) {
        return null;
    }

    return (
        <div className="file-name"><p><span>文件名: </span>
            {props.filename}
        </p></div>
    );
};

class FileUploadBody extends React.Component {
    constructor(props) {
        super(props);
        this.handleSelectFile = this.handleSelectFile.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    handleSelectFile(e) {
        let {selectFile} = this.props;
        selectFile(e.target.value.trim());
    }

    handleSubmit() {
        let that = this;
        let file = this.refs.file.files[0];
        let reader = new FileReader();
        let md5;
        let size = file.size;
        let type = file.type;
        let MIME = getMyMIME(type);
        let obj = {
            name: file.name,
            description: this.props.description,
            leftAllowDownloadCount: this.props.leftAllowDownloadCount,
            share: this.props.share,
            expireTime: this.props.expireTime
        };
        new Promise((resolve, reject) => {
            reader.onload = function (event) {
                let binary = event.target.result;
                md5 = CryptoJS.MD5(binary).toString();
                resolve();
            };
            reader.readAsBinaryString(file);
        })
            .then(() => {
                let body = {};
                Object.keys(obj).forEach(key => {
                    if (!!obj[key])
                        body[key] = obj[key];
                });
                body['md5'] = md5;
                body['size'] = size;
                that.refs['progress'].style.display = 'block';
                return new Promise((resolve, reject) => {
                    fetch('/api/file/uploadCheck', {
                        method: 'POST',
                        body: JSON.stringify(body),
                        headers: {'Content-Type': 'application/json'}
                    }).then(function (response) {
                        return response.json();
                    }).then(function (data) {
                        resolve(data);
                    });
                });
            })
            .then((data) => {
                console.log(data);
                let {uploadSuccess} = that.props;
                if (!data.success) {
                    that.refs['progressBar'].style.width = '100%';
                    that.refs['percent'].innerHTML = '100%';
                    setTimeout(() => {
                        uploadSuccess({
                            extractCode: data['msg'],
                            filename: file.name,
                            redirect: true,
                            time: new Date(),
                            description:that.props.description
                        });
                    }, 1000);
                } else {
                    let formData = new FormData();
                    formData.append('file', file);
                    formData.append('md5', md5);
                    formData.append('size', size);
                    formData.append('MIME', MIME);
                    Object.keys(obj).forEach(key => {
                        if (!!obj[key])
                            formData.append(key, obj[key]);
                    });
                    // 上传进度回调函数：
                    let progressHandlingFunction = (e) => {
                        if (event.lengthComputable) {
                            let percent = Math.floor(event.loaded / event.total * 100);
                            that.refs['progressBar'].style.width = `${percent}%`;
                            that.refs['percent'].innerHTML = `${percent}%`;
                        }
                    };
                    //ajax 异步上传
                    $.ajax({
                        url: '/api/file/upload',
                        type: 'POST',
                        data: formData,
                        xhr: function () { // 获取 ajaxSettings 中的 xhr 对象，为它的 upload 属性绑定 progress 事件的处理函数

                            let myXhr = $.ajaxSettings.xhr();
                            if (myXhr.upload) { // 检查 upload 属性是否存在
                                // 绑定 progress 事件的回调函数
                                myXhr.upload.addEventListener('progress', progressHandlingFunction, false);
                            }
                            return myXhr; //xhr 对象返回给 jQuery 使用
                        },
                        success: function (result) {
                            console.log(result);
                            if (!!result['success']) {
                                setTimeout(() => {
                                    uploadSuccess({
                                        extractCode: result['data'],
                                        filename: file.name,
                                        redirect: true,
                                        time: new Date(),
                                        description:that.props.description
                                    });
                                }, 1000);
                            }
                        },
                        contentType: false, // 必须 false 才会自动加上正确的 Content-Type
                        processData: false  // 必须 false 才会避开 jQuery 对 formdata 的默认处理
                    });
                }
            });


    }

    handleChange(event) {
        let {changeValue} = this.props;
        let data = {};
        let value = event.target.value;
        let name = event.target.name;
        if (event.target.name === 'count') {
            if (!isNaN(value) && parseFloat(value) === parseInt(value)) {
                this.refs['leftAllowDownloadCount'].value = value;
            }

            if (!this.refs['leftAllowDownloadCount'].checked)
                return;
            data['leftAllowDownloadCount'] = value;
        } else {
            if (value === 'on') {
                data[name] = null;
            } else {
                data[name] = value;
            }
        }
        changeValue(data);
    }

    render() {

        let {filename, redirect} = this.props;
        if (!!redirect) {
            return <Redirect from={'/file/upload'} to={'/file/code'}/>;
        }
        return (
            <div className="upload-body">
                <div>
                    <div className="body-top">
                        <div className="body-name"><span>上传</span></div>
                        <div className="body-login"><span>你还没登录 点击</span><a href="">登录上传</a></div>
                    </div>
                    <form>
                        <div className="body-drag">
                            <input type="file"
                                   onChange={this.handleSelectFile} name="file" ref={'file'}/>
                            <FileName filename={filename}/>
                            <div className="drag-logo">
                            </div>
                            <p>支持文件拖曳上传</p>
                            {/*进度条*/}

                            <div className="progress progress-striped active"
                                 style={{display: 'none'}} ref={'progress'}>
                                <div className="progress-bar progress-bar-info" role="progressbar"
                                     aria-valuenow="60" aria-valuemin="0" aria-valuemax="100"
                                     style={{width: '0%'}} ref={'progressBar'}>
                                    <span ref={'percent'}/>
                                </div>
                            </div>

                        </div>

                        <div className="body-setting" onChange={this.handleChange}>
                            <p><span className="setting">上传设置</span></p>

                            <div className="form-group">
                                <span>是否分享到广场</span>
                                <label> <input type="radio" name="share" value="true"/>是</label>
                                <label> <input type="radio" name="share" value="false"/>否</label>
                            </div>
                            <div className="form-group">
                                <span>有效时间</span>
                                <label> <input type="radio" name="expireTime" value={3600 * 1000 * 24}/>一天</label>
                                <label> <input type="radio" name="expireTime" value={7 * 3600 * 1000 * 24}/>一周</label>
                                <label> <input type="radio" name="expireTime" value={30 * 3600 * 1000 * 24}/>30天</label>
                                <label> <input type="radio" name="expireTime"/>永久</label>
                            </div>
                            <div className="form-group">
                                <span>下载次数</span>
                                <label><input type="radio" name="leftAllowDownloadCount" value={1}/>一次</label>
                                <label><input type="radio" name="leftAllowDownloadCount"/>不限</label>
                                <label><input type="radio" name="leftAllowDownloadCount"
                                              ref={'leftAllowDownloadCount'}/><input type="text"
                                                                                     name={'count'}/>次</label>
                            </div>
                            <div className="form-group">
                                <span>详情描述</span>
                                <label><textarea id="description" name={'description'}/></label>
                            </div>

                            <div className="youyun-btn" onClick={this.handleSubmit}>
                                <span>确定</span>
                            </div>

                        </div>
                    </form>
                </div>
            </div>
        );
    }
}

export {FileUploadBody};