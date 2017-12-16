import './index.scss';
import React from 'react';

import 'font-awesome/scss/font-awesome.scss';
import {Link} from 'react-router-dom';
let $ = require('jquery');

export default class FileDownloadComponent extends React.Component {

    constructor(props) {
        super(props);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange() {
        let {handleCodeErr} = this.props;
        handleCodeErr({
            iscodeerr: false
        });
    }

    handleSubmit() {
        let identifyCode = this.refs['code'].value;
        if (identifyCode.trim() === '')
            return;
        let that = this;
        let {handleCodeErr} = this.props;
        $.ajax(`/api/file/checkdownload/${identifyCode}`)
            .done(function (res) {
                if (res.success) {
                    let encrypt = res.data;
                    let form = that.refs['form'];
                    form.action = `/api/file/download/${encrypt }`;
                    form.submit();
                }
                else
                    handleCodeErr({
                        iscodeerr: true
                    });
            })
            .fail(function () {
                handleCodeErr({
                    iscodeerr: true
                });
            });
    }

    render() {
        let {iscodeerr} = this.props;
        return (
            <div className="home-body clearfix">
                <div>
                    <header>
                        <p>优云</p>
                        <ul>
                            <li><Link to="/">提取码</Link></li>
                            <li><Link to="/file/upload">传输文件</Link></li>
                            <li><a href="">找资源</a></li>
                            <li><a href="">分享文件</a></li>
                            <li><a href="">关注人</a></li>
                        </ul>
                    </header>
                    <section>
                        <div className={'caption'}>
                            <div className={'body-logo'}>

                            </div>
                            <p><span>提取码</span></p>
                        </div>
                        <div className={'main-body'}>
                            <form method={'get'} ref={'form'} target={'upload_target'}>
                                <div className={'info'}>
                                    <p>请输入提取码以获取文件</p>
                                </div>
                                <div className={iscodeerr ?
                                    'extract-code-text-err extract-code-text' : 'extract-code-text'}>
                                    <input type="text" ref={'code'} onClick={this.handleChange}/>
                                </div>
                                {
                                    !iscodeerr || <div className={'code-tips'}>
                                        <p>提取码错误!</p>
                                    </div>
                                }
                                <div className={'submit-btn'} onClick={this.handleSubmit}>
                                    <span>提取文件</span>
                                </div>
                            </form>
                        </div>
                        <iframe name="upload_target" ref={'catch_result'}
                                style={{height: 0, width: 0}}/>
                    </section>
                </div>
            </div>
        );
    }
}
