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
                            <span><i className="fa fa-circle" />&nbsp;</span>
                            <span className="file-body-all">
                                <a href="">全部</a>
                            </span>
                        </div>
                        <ul>
                            <li><a href="">图片</a></li>
                            <li><a href="">音乐</a></li>
                            <li><a href="">视频</a></li>
                            <li><a href="">文档</a></li>
                            <li><a href="">app</a></li>
                            <li><a href="">其他</a></li>
                        </ul>
                    </div>

                    <div className="file-body-group">
                        <div className="file-body-span">
                            <span><i className="fa fa-circle" />&nbsp;</span>
                            <span className="file-body-share">
                                <a href="">我的分享</a>
                            </span>
                        </div>
                    </div>


                    <div className="file-body-group">
                        <div className="file-body-span">
                            <span><i className="fa fa-circle" />&nbsp;</span>
                            <span className="file-body-recycle">
                                <a href="">回收</a>
                            </span>
                        </div>
                    </div>
                </div>



                <div className="file-body-right">
                    <div className="body-right-header">
                        
                    </div>
                </div>


            </div>
        );
    }
}

export { FileBody };