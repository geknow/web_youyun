import './index.scss';
import React from 'react';

import 'font-awesome/scss/font-awesome.scss';

import {Link} from 'react-router-dom';

export default class SquareNav extends React.Component {

    render() {
        return (
            <div className={'square-nav'}>
                <div className={'not-important'}/>
                <nav className={'square-nav-content'}>
                    <div className={'square-nav-type'}>
                        <ul>
                            <li><Link to={''}><span>全部</span></Link></li>
                            <li><Link to={''}><span>图片</span></Link></li>
                            <li><Link to={''}><span>音乐</span></Link></li>
                            <li><Link to={''}><span>视频</span></Link></li>
                            <li><Link to={''}><span>文档</span></Link></li>
                            <li><Link to={''}><span>app</span></Link></li>
                            <li><Link to={''}><span>其他</span></Link></li>
                        </ul>
                    </div>
                    <div className={'square-nav-items'}>
                        <ul>
                            <li><Link to={''}><span>全部</span></Link></li>
                            <li><Link to={''}><span>关注</span></Link></li>
                            <li><Link to={''}><span>热门</span></Link></li>
                        </ul>
                    </div>
                </nav>
            </div>
        );
    }
}
