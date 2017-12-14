import './index.scss';
import React from 'react';
import 'font-awesome/scss/font-awesome.scss';

export default class FooterComponent extends React.Component {
    render() {
        return (
            <footer className="footer-component">
                <div className="footer-component-first">
                    <div className="footer-left">
                        <div><p>
                            <i className="fa fa-phone"/>&nbsp;
                            联系我们: xxx-xxxxxxx</p>
                        </div>
                        <div><p>
                            <i className="fa fa-map-marker"/>&nbsp;
                            辽宁省大连市 大连理工大学-开发区校区 OurEDA实验室</p>
                        </div>
                    </div>
                    <div className="footer-right">
                        <ul>
                            <li><a href="">首页</a></li>
                            <li><a href="">关于</a></li>
                            <li><a href="">服务</a></li>
                            <li><a href="">联系</a></li>
                        </ul>
                    </div>
                </div>

                <div className="footer-component-second">
                    <p>&copy;2017大连理工大学开发区校区 OurEDA实验室 ALL RIGHT RESERVED</p>
                </div>
            </footer>
        );
    }
}


