import './index.scss';
import React from 'react';

import 'font-awesome/scss/font-awesome.scss';
import bigLogo from '../../../icon/logo_bigger.png';
import qqLogo from '../../../icon/icon_login_qq.png';
import wechatLogo from '../../../icon/icon__login_wechat.png';
import {Link, Redirect} from 'react-router-dom';


export default class UserLogin extends React.Component {
    constructor() {
        super();
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    handleSubmit() {
        let {login, phone, password} = this.props;
        login({
            phone,
            password
        });
    }

    //委托事件
    handleChange(event) {
        let {changeValue} = this.props;
        let value = event.target.value;
        let name = event.target.name;
        changeValue({
            [name]: value
        });
    }


    render() {
        let {islogin} = this.props;

        if (!!islogin) {
            return <Redirect from={'/user/login'} to={'/file/center'}/>;
        }
        return (
            <div className={'user-login'}>
                <aside className={'user-login-left'}>
                    <div className={'left-info'}>
                        <div>
                            <div className={'logo'}>
                                <img src={bigLogo} alt=""/>
                            </div>
                            <p>优云</p>
                        </div>
                    </div>
                    <nav className={'left-attach'}>
                        <ul>
                            <li><span>提取码</span></li>
                            <li><span>传输文件</span></li>
                            <li><span>找资源</span></li>
                            <li><span>分享文件</span></li>
                            <li><span>关注人</span></li>
                        </ul>
                        <p>2017OurEDA yunpan platform</p>
                    </nav>
                </aside>
                <aside className={'user-login-right'}>
                    <header>
                        <p>登录</p>
                    </header>
                    <section className={'login-form'} onChange={this.handleChange}>
                        <div className={'phone input-text'}>
                            <input type="text" name={'phone'} placeholder={'请输入账号'}/>
                        </div>
                        <div className={'password input-text'}>
                            <input type="text" name={'password'} placeholder={'请输入密码'}/>
                        </div>
                        <div className={'remember-p'}>
                            <span>
                                <input type="checkbox" name={'rememberP'}/>
                                <span>记住密码</span>
                            </span>
                            <span>忘记密码?</span>
                        </div>
                        <div className={'btn-submit'} onClick={this.handleSubmit}>
                            <span>登录</span>
                        </div>
                        <div className={'to-register'}>
                            <p>没有账号?<span>免费注册</span></p>
                        </div>
                        <div className={'line'}/>
                    </section>
                    <footer>
                        <div className={'qq-login'}>
                            <img src={qqLogo} alt=""/>
                        </div>
                        <div className={'wechat-login'}>
                            <img src={wechatLogo} alt=""/>
                        </div>
                    </footer>

                </aside>
            </div>
        );
    }
}
