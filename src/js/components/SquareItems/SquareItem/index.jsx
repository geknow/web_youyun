import './index.scss';
import React from 'react';

import 'font-awesome/scss/font-awesome.scss';


import {Link} from 'react-router-dom';
import {findDOMNode} from 'react-dom';
import docIcon from '../../../../icon/90/file.png';

import smallDocIcon from '../../../../icon/30/file.png';
import smallApkIcon from '../../../../icon/30/apk.png';
import smallMusicIcon from '../../../../icon/30/music.png';


import vedio from '../../../../icon/90/vedio.png';
import apk from '../../../../icon/90/apk.png';
import music from '../../../../icon/90/music.png';
import ppt from '../../../../icon/90/ppt.png';
import zip from '../../../../icon/90/zip.png';
import word from '../../../../icon/90/word.png';
import pdf from '../../../../icon/90/pdf.png';
import file from '../../../../icon/90/file.png';
import code from '../../../../icon/90/code.png';
import * as MIME_TYPE from '../../../service/fileHelper';
import ROUTE from '../../../actions/backendUrl';
import {getDownloadLink} from '../../../service/fileHelper';
import ROUTER from '../../../../router';

export default class SquareItem extends React.Component {
    render() {
        let {data, showFile} = this.props;
        let time = new Date(data.createTime);
        let type;
        if (data)
            switch (data.mime) {
                case MIME_TYPE.MIME_DOCUMENT:
                    type = word;
                    break;
                case MIME_TYPE.MIME_MUSIC:
                    type = music;
                    break;
                case MIME_TYPE.MIME_APPLICATION:
                    type = apk;
                    break;
                case MIME_TYPE.MIME_VIDEO:
                    type = vedio;
                    break;
                case MIME_TYPE.MIME_ZIP:
                    type = zip;
                    break;
                default:
                    type = file;
                    break;
            }

        return (
            <div className="square-item">
                <div className={'item'}>
                    <div className={'item-fileinfo clearfix'}>
                        <div className={'item-type'}>
                            <img src={type} alt=""/>
                        </div>
                        <span className={'download-name'}><Link to={ROUTER.FILEITEM}
                                                                onClick={() => {
                                                                    showFile(data);
                                                                }}>{data.name}</Link></span>
                        <p>{data.description || '没有描述~~'}</p>
                    </div>
                    {/*<div className={'item-main'}>*/}
                    {/*<ul>*/}
                    {/*<li>*/}
                    {/*<div className={'file-logo'}>*/}
                    {/*<img src={smallMusicIcon} alt=""/>*/}
                    {/*</div>*/}
                    {/*<p>......mp4</p>*/}
                    {/*</li>*/}
                    {/*<li>*/}
                    {/*<div className={'file-logo'}>*/}
                    {/*<img src={smallDocIcon} alt=""/>*/}
                    {/*</div>*/}
                    {/*<p>......doc</p>*/}
                    {/*</li>*/}
                    {/*<li>*/}
                    {/*<div className={'file-logo'}>*/}
                    {/*<img src={smallApkIcon} alt=""/>*/}
                    {/*</div>*/}
                    {/*<p>......apk</p>*/}
                    {/*</li>*/}
                    {/*</ul>*/}
                    {/*</div>*/}
                    <div className={'item-attach'}>
                        <div className={'item-user'}>
                            <div className={'user-avatar'}>
                                <img
                                    src={data.user ? data.user.avatar : ROUTE.defaultAvatar}
                                    alt=""/>
                            </div>
                            <p><span>{data.user ? data.user.username : '佚名用户'}</span>公开分享了该文件</p>
                        </div>
                        <p className={'time'}>{time.getMonth() + '月' + time.getDay() + '日 ' + time.getHours() + ':' + time.getMinutes()}</p>
                        <div className={'item-info'}>
                            <ul className={'clearfix'}>
                                <li><span>下载</span><span>({data.downloadCount})</span></li>
                                <li><span>浏览</span><span>({data.lookNum})</span></li>
                                <li><span>赞</span><span>({data.star})</span></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
