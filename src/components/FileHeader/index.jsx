import './index.scss';
import React from 'react';
import logo from '../../icon/logo.png';
import 'font-awesome/scss/font-awesome.scss';

class FileHeader extends React.Component {
    render() {
        return (
            <div className="main-header clearfix">
                <div className="header-component header-logo-component">
                    <div className="logo-component"><img src={logo} alt="" /></div>
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
                        <input type="text" placeholder="搜索" />
                        <i className="icon fa fa-search mooc-search-icon" ></i>
                    </form>
                </div>
                <div className="header-component header-info-component">
                    <ul>
                        <li><a href=""><i className="icon fa fa-user-o" />&nbsp;<span>日朋</span></a></li>
                        <span>&nbsp;|&nbsp;</span>
                        <li><a href=""><i className="icon fa fa-commenting-o" /></a></li>
                        <li><a href=""><i className="icon fa fa-cog" /></a></li>
                    </ul>
                </div>
            </div>
        );
    }
}


export { FileHeader };