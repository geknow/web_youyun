import './index.scss';
import React from 'react';


class MainHeader extends React.Component {
    render() {
        return (
            <div className="main_header">
                <div className="header-component header-logo-component">
                    <div className="logo-component"><img src="../../icon/logo.png" alt=""/></div>
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
                        <i className="icon icon-search"/>
                    </form>
                </div>
                <div className="header-component header-info-component">
                    <ul>
                        <li><a href=""><i className="icon icon-person"/><span>日朋</span></a></li>
                        <li><a href=""><i className="icon icon-message"/></a></li>
                        <li><a href=""><i className="icon icon-setting"/></a></li>
                    </ul>
                </div>
            </div>
        );
    }
}


export {MainHeader};