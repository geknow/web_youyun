import './index.scss';
import React from 'react';

import 'font-awesome/scss/font-awesome.scss';


class FileExtractCodeBody extends React.Component {
    render() {
        return (
            <div className="ExtractCode">
                <div>
                    <div className="header">
                        <div className="header-info">
                            <div className="avatar">

                            </div>
                            <div className="file-info">
                                <p><span>日朋 </span> 公开分享了文件</p>
                                <p>名人传 (2017年4月)</p>
                            </div>
                            <div className="file-time">
                                <span>10月6日 14:02</span>
                            </div>
                        </div>
                        <div className="file-info">
                            <div className="description">
                                <p>这是一条情况说明
                                    这是一条情况说明
                                    这是一条情况说明
                                    这是一条情况说明
                                    这是一条情况说明
                                    这是一条情况说明
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
                            <div className="extract-code">abcd<span>提取码永久有效</span></div>
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