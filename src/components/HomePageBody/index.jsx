import './index.scss';
import React from 'react';

import 'font-awesome/scss/font-awesome.scss';


class HomePageBody extends React.Component {
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
                            <form action="">
                                <div className={'info'}>
                                    <p>请输入提取码以获取文件</p>
                                </div>
                                <div className={'extract-code-text'}>
                                    <input type="text"/>
                                </div>
                                <div className={'submit-btn'}>
                                    <span>提取文件</span>
                                </div>
                            </form>
                        </div>
                    </section>
                </div>
            </div>
        );
    }
}

export {HomePageBody};