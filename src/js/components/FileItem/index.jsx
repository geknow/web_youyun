import './index.scss';
import React from 'react';

import 'font-awesome/scss/font-awesome.scss';
import {getFileDetail} from '../../actions/File';

export default class FileItemComponent extends React.Component {

    async componentWillMount(){
        if(this.props.data.identifyCode) {
            let res = await getFileDetail(this.props.data.identifyCode);
            if(res){
                let {getFileDetailFinish} = this.props;
                getFileDetailFinish(res);
            }
        }
    }
    render() {
        let data = this.props.data ? this.props.data : {};
        let date = data.createTime ? new Date(data.createTime) : new Date();
        return (
            <div className="itemBody">
                <div>
                    <div className="itemBody-header">
                        <div className="header-wrap">
                            <div className="file-type header"/>
                            <div className="file-info header">
                                <div className="file-people">
                                    <a href="">{data.user ? data.user.username : '佚名用户'}</a>
                                    <span>公开分享了文件</span>
                                </div>
                                <div className="file-name">
                                    <span>{data.name}</span>
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
                                    <span>{data.identifyCode}</span>
                                    <span>提取码永久有效</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="itemBody-body">
                        <div className="description">
                            <p>{data.description ? data.description : '没有留下描述～'}</p>
                        </div>
                        <div className="picture clearfix">
                            {/*<div className="img-wrap">*/}
                                {/*<img src="http://img1.imgtn.bdimg.com/it/u=594559231,2167829292&fm=27&gp=0.jpg" alt=""/>*/}
                            {/*</div>*/}
                            {/*<div className="img-wrap">*/}
                                {/*<img src="http://img1.imgtn.bdimg.com/it/u=594559231,2167829292&fm=27&gp=0.jpg" alt=""/>*/}
                            {/*</div>*/}
                            {/*<div className="img-wrap">*/}
                                {/*<img src="http://img1.imgtn.bdimg.com/it/u=594559231,2167829292&fm=27&gp=0.jpg" alt=""/>*/}
                            {/*</div>*/}
                            {/*<div className="img-wrap">*/}
                                {/*<img src="http://img1.imgtn.bdimg.com/it/u=594559231,2167829292&fm=27&gp=0.jpg" alt=""/>*/}
                            {/*</div>*/}
                            {/*<div className="img-wrap">*/}
                                {/*<img src="http://img1.imgtn.bdimg.com/it/u=594559231,2167829292&fm=27&gp=0.jpg" alt=""/>*/}
                            {/*</div>*/}
                        </div>
                        <div className="time clearfix">
                            <span>{date.toLocaleString()}</span>
                        </div>
                    </div>

                    <div className="info clearfix">
                        <span>评论</span>
                        <ul>
                            <li>
                                <a href="">下载</a>
                                <span>({data.downloadCount})</span>
                            </li>
                            <li>
                                <a href="">浏览</a>
                                <span>({data.lookNum})</span>
                            </li>
                            <li>
                                <a href="">赞</a>
                                <span>({data.star})</span>
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

