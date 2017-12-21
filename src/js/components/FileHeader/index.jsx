import './index.scss';
import React from 'react';
import logo from '../../../icon/logo.png';
import 'font-awesome/scss/font-awesome.scss';
import {Link} from 'react-router-dom';
import store from '../../../store';
let Message = ({messageCount}) => {
    return (
        <div id="header-message">
            <span>{messageCount}</span>
        </div>
    );
};

let Setting = () => <div id="header-setting">
    <span><em/></span>
    <ul>
        <li><a href="">账号设置</a></li>
        <li><a href="">隐私设置</a></li>
        <li><a href="">关于U云</a></li>
        <li><a href="">退出</a></li>
    </ul>
</div>;

export default class FileHeaderComponent extends React.Component {

    render() {
        let {messageCount, showSetting, showSettingHandle, islogin} = this.props;
        console.log(store.getState());
        console.log(this.props);
        console.log(islogin);
        return (
            <header className="main-header clearfix">
                <div className="header-component header-logo-component">
                    <div className="logo-component"><Link to={'/'}><img src={logo} alt=""/></Link></div>
                    <div className="logo-name">优云</div>
                </div>
                <div className="header-component header-nav-component">
                    <ul>
                        <li><a href="">首页</a></li>
                        <li><a href="">发现广场</a></li>
                        <li><Link to={'/file/upload'}>我要上传</Link></li>
                        <li><Link to={'/file/center'}>我的文件</Link></li>
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
                                <li><a href=""><i className="icon fa fa-user-o"/>&nbsp;<span>日朋</span></a></li>
                                <span>&nbsp;|&nbsp;</span>
                                <li className="message">
                                    <a><i className="icon fa fa-commenting-o"/></a>
                                    {messageCount > 0 ? <Message messageCount={messageCount}/> : null}
                                </li>
                                <li className="setting" onClick={showSettingHandle}>
                                    <a><i className="icon fa fa-cog"/></a>
                                    {showSetting ? <Setting/> : null}
                                </li>
                            </ul>
                        </div>
                        :
                        <div className={'header-component header-login-component'}>
                            <ul>
                                <li><span>登录</span></li>
                                <span>&nbsp;|&nbsp;</span>
                                <li><span>注册</span></li>
                            </ul>
                        </div>
                }
            </header>
        );
    }
}

