import './index.scss';
import React from 'react';

import 'font-awesome/scss/font-awesome.scss';
import Clipboard from 'clipboard';
import vedio from '../../../icon/90/vedio.png';
import apk from '../../../icon/90/apk.png';
import music from '../../../icon/90/music.png';
import ppt from '../../../icon/90/ppt.png';
import zip from '../../../icon/90/zip.png';
import word from '../../../icon/90/word.png';
import pdf from '../../../icon/90/pdf.png';
import file from '../../../icon/90/file.png';
import code from '../../../icon/90/code.png';
import * as MIME_TYPE from '../../service/fileHelper';

export default class FileExtractCodeComponent extends React.Component {
    render() {
        let {identifyCode, name, createTime, description, user, mime, MIME} = this.props;
        user = user || {};
        let data = new Date(createTime);

        let clipboard = new Clipboard('.copy-btn');

        clipboard.on('success', function (e) {
            e.clearSelection();
        });

        let type;
        let m = mime || MIME;
        switch (m) {
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
        let style = {
            backgroundImage: 'url(' + type + ')'
        };

        return (
            <div className="ExtractCode">
                <div>
                    <div className="header">
                        <div className="header-info">
                            <div className="avatar"
                                 style={style}>

                            </div>
                            <div className="file-info">
                                <p><span>{user.username || '不知名用户'} </span> 分享了文件</p>
                                <p>{name} ({data.getFullYear()}年{data.getMonth()}月)</p>
                            </div>
                            <div className="file-time">
                                <span>{data.getMonth()}月{data.getDay()}日 {data.getHours()}:{data.getMinutes()}</span>
                            </div>
                        </div>
                        <div className="file-info">
                            <div className="description">
                                <p>{description || '没有描述'}
                                </p>
                            </div>
                            <div id="file">
                                {/*看情况*/}
                            </div>
                        </div>
                    </div>
                    <div className="body">
                        <p><span className="tick"/>已成功创建了提取码</p>
                        <div className="body-extract-code">
                            <span>提取码</span>
                            <div className="extract-code">{identifyCode}<span>提取码永久有效</span></div>
                            <div className="copy-btn" data-clipboard-text={identifyCode}>复制提取码
                            </div>
                        </div>
                        <p>请妥善保管提取码 非登录状态下上传的文件易丢失</p>
                    </div>
                </div>
            </div>
        );
    }
}

