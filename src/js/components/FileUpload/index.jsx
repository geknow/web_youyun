import './index.scss';
import React from 'react';

import 'font-awesome/scss/font-awesome.scss';

import 'bootstrap/dist/js/bootstrap';
import 'bootstrap/dist/css/bootstrap.css';
import {Redirect, Link} from 'react-router-dom';
import ROUTER from '../../../router';

import {getMyMIME} from '../../service/fileHelper';

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

export default class FileUploadComponent extends React.Component {
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
        let {uploadFile} = this.props;
        let file = this.refs['file'].files[0];
        let body = {
            name: file.name,
            description: this.props.description,
            leftAllowDownloadCount: this.props.leftAllowDownloadCount,
            share: this.props.share,
            expireTime: this.props.expireTime,
            size: file.size,
            MIME: getMyMIME(file.type)
        };
        let data = {
            body,
            result: event.target.result,
            file
        };
        uploadFile(data);
    }

    //委托事件
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
        let {filename, redirect, uploading, progress, islogin} = this.props;
        let percent = !!progress ? `${progress}%` : 0;
        if (!!redirect) {
            return <Redirect from={ROUTER.FILEUPLOAD} to={ROUTER.FILECODE}/>;
        }

        return (
            <div className="upload-body">
                <div>
                    <div className="body-top">
                        <div className="body-name"><span>上传</span></div>
                        {
                            !islogin ?
                                <div className="body-login">
                                    <span>你还没登录 点击</span>
                                    <Link to={ROUTER.LOGIN}>登录上传</Link>
                                </div>
                                : null
                        }
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
                                 style={{display: uploading ? 'block' : 'none'}}>
                                <div className="progress-bar progress-bar-info" role="progressbar"
                                     aria-valuenow="60" aria-valuemin="0" aria-valuemax="100"
                                     style={{width: percent}}>
                                    <span>{percent}</span>
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

