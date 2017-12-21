import './index.scss';
import React from 'react';

import 'font-awesome/scss/font-awesome.scss';


import {Link} from 'react-router-dom';
import {findDOMNode} from 'react-dom';
import docIcon from '../../../../icon/90/file.png';

import smallDocIcon from '../../../../icon/30/file.png';
import smallApkIcon from '../../../../icon/30/apk.png';
import smallMusicIcon from '../../../../icon/30/music.png';

export default class SquareItem extends React.Component {


    render() {
        return (
            <div className="square-item">
                <div className={'item'}>
                    <div className={'item-fileinfo clearfix'}>
                        <div className={'item-type'}>
                            <img src={docIcon} alt=""/>
                        </div>
                        <span>2个文件</span>
                        <p>这是一条详情说明这是一条详情说明这是一条详情说明这是一条详情说明</p>
                    </div>
                    <div className={'item-main'}>
                        <ul>
                            <li>
                                <div className={'file-logo'}>
                                    <img src={smallMusicIcon} alt=""/>
                                </div>
                                <p>......mp4</p>
                            </li>
                            <li>
                                <div className={'file-logo'}>
                                    <img src={smallDocIcon} alt=""/>
                                </div>
                                <p>......doc</p>
                            </li>
                            <li>
                                <div className={'file-logo'}>
                                    <img src={smallApkIcon} alt=""/>
                                </div>
                                <p>......apk</p>
                            </li>
                        </ul>
                    </div>
                    <div className={'item-attach'}>
                        <div className={'item-user'}>
                            <div className={'user-avatar'}>
                                <img src="https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=2983011205,1072109279&fm=27&gp=0.jpg" alt=""/>
                            </div>
                            <p><span>little_friend</span>公开分享了该文件</p>
                        </div>
                        <p className={'time'}>10月6日14:02</p>
                        <div className={'item-info'}>
                            <ul className={'clearfix'}>
                                <li><span>下载</span><span>(10)</span></li>
                                <li><span>评论</span><span>(1)</span></li>
                                <li><span>赞</span><span>(100)</span></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
