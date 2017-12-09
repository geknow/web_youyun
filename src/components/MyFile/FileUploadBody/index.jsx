import './index.scss';
import React from 'react';

import 'font-awesome/scss/font-awesome.scss';

let FileName = (props) => {
    if(!props.filename){
        return null;
    }

    return (
        <div className="file-name"><p><span>文件名: </span>
            {props.filename}
        </p></div>
    );
};

class FileUploadBody extends React.Component {
    constructor(props){
        super(props);
        this.handleSelectFile = this.handleSelectFile.bind(this);
    }

    handleSelectFile(e){
        let {selectFile} = this.props;
        selectFile(e.target.value.trim());
    }

    render() {

        let {filename} = this.props;

        return (
            <div className="upload-body">
                <div>
                    <div className="body-top">
                        <div className="body-name"><span>上传</span></div>
                        <div className="body-login"><span>你还没登录 点击</span><a href="">登录上传</a></div>
                    </div>
                    <form action="">
                        <div className="body-drag">
                            <input type="file" multiple="multiple"
                                   onChange={this.handleSelectFile} name="file"/>
                            <FileName filename={filename}/>
                            <div className="drag-logo">
                            </div>
                            <p>支持文件拖曳上传</p>
                        </div>

                        <div className="body-setting">
                            <p><span className="setting">上传设置</span></p>

                            <div className="form-group">
                                <span>是否分享到广场</span>
                                <label> <input type="radio" name="share" value="true"/>是</label>
                                <label> <input type="radio" name="share" value="false"/>否</label>
                            </div>
                            <div className="form-group">
                                <span>有效时间</span>
                                <label> <input type="radio" name="time"/>一天</label>
                                <label> <input type="radio" name="time"/>一周</label>
                                <label> <input type="radio" name="time"/>30天</label>
                                <label> <input type="radio" name="time"/>永久</label>
                            </div>
                            <div className="form-group">
                                <span>下载次数</span>
                                <label><input type="radio" name="count"/>一次</label>
                                <label><input type="radio" name="count"/>不限</label>
                                <label><input type="radio" name="count"/><input type="text"/>次</label>
                            </div>
                            <div className="form-group">
                                <span>详情描述</span>
                                <label><textarea id="description"/></label>
                            </div>

                            <div className="btn">
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