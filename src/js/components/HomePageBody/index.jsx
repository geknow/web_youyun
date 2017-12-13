import './index.scss';
import React from 'react';

import 'font-awesome/scss/font-awesome.scss';

let $ = require('jquery');

class HomePageBody extends React.Component {

    constructor(props) {
        super(props);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit() {
        let identifyCode = this.refs['code'].value;
        if (identifyCode.trim() === '')
            return;
        let form = this.refs['form'];
        form.action = `/api/file/download/${identifyCode}`;
        form.submit();
    }

    render() {
        return (
            <div className="home-body clearfix">
                <div>
                    <header>
                        <p>优云</p>
                        <ul>
                            <li><a href="">提取码</a></li>
                            <li><a href="">传输文件</a></li>
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
                                <div className={'extract-code-text'}>
                                    <input type="text" ref={'code'}/>
                                </div>
                                <div className={'submit-btn'} onClick={this.handleSubmit}>
                                    <span>提取文件</span>
                                </div>
                            </form>
                        </div>
                        <iframe name="upload_target" ref={'catch_result'}
                        style={{height:0,width:0}}/>
                    </section>
                </div>
            </div>
        );
    }
}

export {HomePageBody};