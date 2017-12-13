import './index.scss';
import React from 'react';

import 'font-awesome/scss/font-awesome.scss';


class FileExtractCodeBody extends React.Component {
    render() {
        let {extractCode, filename, time,description,username} = this.props;
        let data = new Date(time);

        return (
            <div className="ExtractCode">
                <div>
                    <div className="header">
                        <div className="header-info">
                            <div className="avatar">

                            </div>
                            <div className="file-info">
                                <p><span>{username || '不知名用户'} </span> 公开分享了文件</p>
                                <p>{filename} ({data.getFullYear()}年{data.getMonth()}月)</p>
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
                            <div className="extract-code">{extractCode}<span>提取码永久有效</span></div>
                            <div className="copy-btn">复制提取码</div>
                        </div>
                        <p>请妥善保管提取码 非登录状态下上传的文件易丢失</p>
                    </div>
                </div>
            </div>
        );
    }
}

export {FileExtractCodeBody};