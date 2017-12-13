import './index.scss';
import React from 'react';

import 'font-awesome/scss/font-awesome.scss';


class FileBody extends React.Component {
    render() {
        return (
            <div className="file-body clearfix">
                <div className="file-body-left">
                    <div className="file-body-group">
                        <div className="file-body-span">
                            <span><i className="fa fa-circle"/>&nbsp;</span>
                            <span className="file-body-all">
                                <a href="">全部</a>
                            </span>
                        </div>
                        <ul>
                            <li>
                                {/*占位用的*/}
                                <span><i className="fa fa-circle"/>&nbsp;</span>
                                <a href="">图片</a>
                            </li>
                            <li>
                                <span><i className="fa fa-circle"/>&nbsp;</span>
                                <a href="">音乐</a>
                            </li>
                            <li>
                                <span><i className="fa fa-circle"/>&nbsp;</span>
                                <a href="">视频</a>
                            </li>
                            <li>
                                <span><i className="fa fa-circle"/>&nbsp;</span>
                                <a href="">文档</a>
                            </li>
                            <li>
                                <span><i className="fa fa-circle"/>&nbsp;</span>
                                <a href="">app</a>
                            </li>
                            <li>
                                <span><i className="fa fa-circle"/>&nbsp;</span>
                                <a href="">其他</a>
                            </li>
                        </ul>
                    </div>

                    <div className="file-body-group">
                        <div className="file-body-span">
                            <span><i className="fa fa-circle"/>&nbsp;</span>
                            <span className="file-body-share">
                                <a href="">我的分享</a>
                            </span>
                        </div>
                    </div>


                    <div className="file-body-group">
                        <div className="file-body-span">
                            <span><i className="fa fa-circle"/>&nbsp;</span>
                            <span className="file-body-recycle">
                                <a href="">回收站</a>
                            </span>
                        </div>
                    </div>
                </div>


                <div className="file-body-right">
                    <div className="right-header-content">
                        <div className="body-right-header">
                            <div className="header-name">
                                <span>我的文件</span>
                            </div>
                            <div className="header-tag">
                                <ul>
                                    <li><span><i className="fa fa-plus-square-o" aria-hidden="true"/>&nbsp;
                                        新建文件夹</span></li>
                                    <li><span><i className="fa fa-cloud-download" aria-hidden="true"/>&nbsp;下载</span>
                                    </li>
                                    <li><span><i className="fa fa-trash" aria-hidden="true"/>&nbsp;删除</span></li>
                                    <li><span><i className="fa fa-share-alt" aria-hidden="true"/>&nbsp;分享</span></li>
                                    <li><span><i className="fa fa-upload" aria-hidden="true"/>&nbsp;上传</span></li>
                                </ul>
                            </div>
                            <div className="header-file-tag">
                                <ul>
                                    <li>
                                        <div className="box-all">
                                            <i className="fa fa-check" aria-hidden="true"/>
                                        </div>
                                        全部文件
                                    </li>
                                    <li>修改日期</li>
                                    <li>文件大小</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="r_hr"/>
                    <div className="right-body-content">
                        <div className="content">
                            <ul className="row">
                                <li>
                                    <ul>
                                        <li>
                                            <div className="box-single">
                                                <i className="fa fa-check" aria-hidden="true"/>
                                            </div>
                                            <div className="file-type">

                                            </div>
                                            <span>我的资源</span>
                                        </li>
                                        <li><span>2017年10月6号 14:02</span></li>
                                        <li><span>100.0M</span></li>
                                    </ul>
                                </li>
                                <li>
                                    <ul>
                                        <li>
                                            <div className="box-single">
                                                <i className="fa fa-check" aria-hidden="true"/>
                                            </div>
                                            <div className="file-type">

                                            </div>
                                            <span>我的资源</span></li>
                                        <li><span>2017年10月6号 14:02</span></li>
                                        <li><span>-</span></li>
                                    </ul>
                                </li>
                                <li>
                                    <ul>
                                        <li>
                                            <div className="box-single">
                                                <i className="fa fa-check" aria-hidden="true"/>
                                            </div>
                                            <div className="file-type">

                                            </div>
                                            <span>我的资源</span></li>
                                        <li><span>2017年10月6号 14:02</span></li>
                                        <li><span>100.0M</span></li>
                                    </ul>
                                </li>

                            </ul>
                        </div>
                    </div>
                </div>


            </div>
        );
    }
}

export {FileBody};