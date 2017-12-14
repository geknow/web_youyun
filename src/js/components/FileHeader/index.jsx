import './index.scss';
import React from 'react';
import logo from '../../../icon/logo.png';
import 'font-awesome/scss/font-awesome.scss';

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
        let {messageCount, showSetting, showSettingHandle} = this.props;
        return (
            <header className="main-header clearfix">
                <div className="header-component header-logo-component">
                    <div className="logo-component"><a href=""><img src={logo} alt=""/></a></div>
                    <div className="logo-name">优云</div>
                </div>
                <div className="header-component header-nav-component">
                    <ul>
                        <li><a href="">首页</a></li>
                        <li><a href="">发现广场</a></li>
                        <li><a href="">我要上传</a></li>
                        <li><a href="">我的文件</a></li>
                    </ul>
                </div>
                <div className="header-component header-search-component">
                    <form action="">
                        <input type="text" placeholder="搜索"/>
                        <i className="icon fa fa-search mooc-search-icon"/>
                    </form>
                </div>
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
            </header>
        );
    }
}

