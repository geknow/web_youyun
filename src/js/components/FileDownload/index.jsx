import './index.scss';
import React from 'react';

import 'font-awesome/scss/font-awesome.scss';
import {Link} from 'react-router-dom';
import backendUrl from '../../actions/backendUrl';
import BaseReactBgComponent from '../base/BaseReactBgComponent';

export default class FileDownloadComponent extends BaseReactBgComponent {

    constructor(props) {
        super('myCanvas', 'downloadBody', props, 20);
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
        fetch(`/api/file/checkdownload/${identifyCode}`)
            .then(function (response) {
                return response.json();
            })
            .then(function (res) {
                if (res.success) {
                    let encrypt = res.data;
                    let form = that.refs['form'];
                    form.action = `${backendUrl.baseUrl}/file/download/${encrypt}`;
                    form.submit();
                }
                else
                    handleCodeErr({
                        iscodeerr: true
                    });
            })
            .catch((err) => {
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
                    <canvas id={'myCanvas'}>

                    </canvas>
                    <section id={'downloadBody'}>
                        <div className={'caption'}>
                            <div className={'body-logo'}>

                            </div>
                            <p>提取码</p>
                        </div>
                        <div className={'main-body'}>
                            <form method={'get'} ref={'form'} target={'upload_target'}>
                                <div className={'info'}>
                                    <p>请输入提取码以获取文件</p>
                                </div>
                                <div className={iscodeerr ?
                                    'extract-code-text-err extract-code-text' : 'extract-code-text'}>
                                    <input type="text" ref={'code'} onClick={this.handleChange}
                                           placeholder="在此输入6位提取码" autofocus="autofocus"/>
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
                <img src={require('../../../icon/wave.png')} id={'wave'}>

                </img>
            </div>
        );
    }
}
