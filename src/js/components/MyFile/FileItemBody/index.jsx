import './index.scss';
import React from 'react';

import 'font-awesome/scss/font-awesome.scss';


class FileItemBody extends React.Component {
    render() {
        return (
            <div className="itemBody">
                <div>
                    <div className="itemBody-header">
                        <div className="header-wrap">
                            <div className="file-type header"/>
                            <div className="file-info header">
                                <div className="file-people">
                                    <a href="">little_friend</a>
                                    <span>公开分享了文件</span>
                                </div>
                                <div className="file-name">
                                    <span>名人传 (2017年4月)</span>
                                </div>
                            </div>
                            <ul className="header">
                                <li>
                                    <span><i className="fa fa-cloud-download" aria-hidden="true"/>&nbsp;下载</span>
                                </li>
                                <li><span>保存到优云</span></li>
                                <li><span>复制提取码</span></li>
                            </ul>
                            <div className="file-code header">
                                <span>提取码</span>
                                <div>
                                    <span>abcd</span>
                                    <span>提取码永久有效</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="itemBody-body">
                        <div className="description">
                            <p>
                                这是一条情况说明这是一条情况说明这是一条情况说明这是一条情况说明这是一条情况说明这是一条情况说明这是一条情况说明这是一条情况说明这是一条情况说明这是一条情况说明这是一条情况说明这是一条情况说明</p>
                        </div>
                        <div className="picture clearfix">
                            <div className="img-wrap">
                                <img src="http://img1.imgtn.bdimg.com/it/u=594559231,2167829292&fm=27&gp=0.jpg" alt=""/>
                            </div>
                            <div className="img-wrap">
                                <img src="http://img1.imgtn.bdimg.com/it/u=594559231,2167829292&fm=27&gp=0.jpg" alt=""/>
                            </div>
                            <div className="img-wrap">
                                <img src="http://img1.imgtn.bdimg.com/it/u=594559231,2167829292&fm=27&gp=0.jpg" alt=""/>
                            </div>
                            <div className="img-wrap">
                                <img src="http://img1.imgtn.bdimg.com/it/u=594559231,2167829292&fm=27&gp=0.jpg" alt=""/>
                            </div>
                            <div className="img-wrap">
                                <img src="http://img1.imgtn.bdimg.com/it/u=594559231,2167829292&fm=27&gp=0.jpg" alt=""/>
                            </div>
                        </div>
                        <div className="time clearfix">
                            <span>10月6日14: 02</span>
                        </div>
                    </div>

                    <div className="info clearfix">
                        <span>评论</span>
                        <ul>
                            <li>
                                <a href="">下载</a>
                                <span>(192)</span>
                            </li>
                            <li>
                                <a href="">评论</a>
                                <span>(2)</span>
                            </li>
                            <li>
                                <a href="">赞</a>
                                <span>(100)</span>
                            </li>
                        </ul>
                    </div>
                    <div className="itemBody-comment">
                        <div className="comment-wrap clearfix">
                            <div className="main-comment clearfix">
                                <div className="avatar">

                                </div>
                                <div className="user-comment">
                                    <p><span>大学物理</span>:这是一条评论</p>
                                    <div className="time">
                                        <span>5分钟前</span>
                                    </div>
                                </div>

                            </div>
                            <div className="comment-info clearfix">
                                <span>赞 (3)</span>
                                <span>回复</span>
                            </div>
                        </div>
                        <div className="comment-wrap clearfix">
                            <div className="main-comment clearfix">
                                <div className="avatar">

                                </div>
                                <div className="user-comment">
                                    <p><span>大学物理</span>:这是一条评论</p>
                                    <div className="time">
                                        <span>5分钟前</span>
                                    </div>
                                </div>
                            </div>

                            <div className="comment-info clearfix">
                                <span>赞 (3)</span>
                                <span>回复</span>
                            </div>

                            <div className="comment-reply clearfix">
                                <div className="user-comment">
                                    <p><span>计算机组成原理</span>:这是一条评论</p>
                                    <div className="time">
                                        <span>1天前</span>
                                    </div>
                                </div>
                                <div className="comment-info">
                                    <span>赞 (3)</span>
                                    <span>回复</span>
                                </div>
                            </div>
                        </div>
                        <div className="comment-wrap clearfix">
                            <div className="main-comment clearfix">
                                <div className="avatar">

                                </div>
                                <div className="user-comment">
                                    <p><span>大学物理</span>:
                                        这是一条评论
                                        这是一条评论
                                        这是一条评论 这是一条评论 这是一条评论 这是一条评论
                                        这是一条评论
                                        这是一条评论
                                        这是一条评论
                                        这是一条评论
                                        这是一条评论
                                    </p>
                                    <div className="time">
                                        <span>5分钟前</span>
                                    </div>
                                </div>

                            </div>
                            <div className="comment-info clearfix">
                                <span>回复</span>
                                <span>赞 (3)</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export {FileItemBody};