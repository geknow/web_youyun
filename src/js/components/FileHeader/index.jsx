import './index.scss';
import React from 'react';
import logo from '../../../icon/logo.png';
import 'font-awesome/scss/font-awesome.scss';
import {Link, Redirect} from 'react-router-dom';
import ROUTER from '../../../router';
import store from '../../../store';
import NavLink from 'react-router-dom/es/NavLink';

let Message = ({messageCount}) => {
    return (
        <div id="header-message">
            <span>{messageCount}</span>
        </div>
    );
};

let Setting = ({logout}) => {
    return (
        <div id="header-setting">
            <span><em/></span>
            <ul>
                <li><a href="">账号设置</a></li>
                <li><a href="">隐私设置</a></li>
                <li><a href="">关于U云</a></li>
                <li><Link onClick={logout} to={ROUTER.LOGIN}>退出</Link></li>
            </ul>
        </div>
    );
};

export default class FileHeaderComponent extends React.Component {

    render() {
        let {messageCount, showSetting, showSettingHandle, islogin, logout, user} = this.props;
        return (
            <header className="main-header clearfix">
                <div className="header-component header-logo-component">
                    <div className="logo-component"><Link to={'/'}><img src={logo} alt=""/></Link></div>
                    <div className="logo-name">优云</div>
                </div>
                <div className="header-component header-nav-component">
                    <ul>
                        <li><NavLink to="/" activeClassName='header-nav-title-selected' isActive={
                            (match, location) => {
                                return match.path === location.pathname;
                            }
                        }>首页</NavLink></li>
                        <li><NavLink to={ROUTER.SQUAREFOUND} activeClassName='header-nav-title-selected'>发现广场</NavLink></li>
                        <li><NavLink to={ROUTER.FILEUPLOAD} activeClassName='header-nav-title-selected'>我要上传</NavLink></li>
                        <li><NavLink to={ROUTER.FILECENTER} activeClassName='header-nav-title-selected'>我的文件</NavLink></li>
                    </ul>
                </div>
                <div className="header-component header-search-component">
                    <form action="">
                        <input type="text" placeholder="搜索"/>
                        <i className="icon fa fa-search mooc-search-icon"/>
                    </form>
                </div>
                {
                    islogin ?
                        <div className="header-component header-info-component">
                            <ul className="header-info-ul">
                                <li><a href=""><i className="icon fa fa-user-o"/>&nbsp;<span>{user.username}</span></a>
                                </li>
                                <span>&nbsp;|&nbsp;</span>
                                <li className="message">
                                    <a><i className="icon fa fa-commenting-o"/></a>
                                    {messageCount > 0 ? <Message messageCount={messageCount}/> : null}
                                </li>
                                <li className="setting" onClick={showSettingHandle}>
                                    <a><i className="icon fa fa-cog"/></a>
                                    {showSetting ? <Setting logout={logout}/> : null}
                                </li>
                            </ul>
                        </div>
                        :
                        <div className={'header-component header-login-component'}>
                            <ul>
                                <li><Link to={ROUTER.LOGIN}><span>登录</span></Link></li>
                                <span>&nbsp;|&nbsp;</span>
                                <li><Link to={ROUTER.REGISTER}><span>注册</span></Link></li>
                            </ul>
                        </div>
                }
            </header>
        );
    }
}

