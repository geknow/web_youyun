import React from 'react';
import './index.scss';

import 'font-awesome/scss/font-awesome.scss';

/**
 {
    "fileId": 1060,
    "comment": "在",
    "userId": 1000,
    "user": {
    "username": "SHANON",
        "avatar": "http://q.qlogo.cn/qqapp/1105716704/844CB8DD15774EE2BAFAB660D7997D3A/100"
},
    "isStar": 0,
    "id": 1000,
    "createTime": 1517404932318,
    "updateTime": 1517404932318
}
 */
export default class CommentItem extends React.Component {

    render() {
        // let comment = this.props.comment;
        // let user = comment.user;
        // let date = (comment && comment.createTime) ? new Date(comment.createTime) : new Date();
        return (
            <div>
                <p>评论</p>
            </div>
            // <div className="comment-wrap clearfix">
            //     <div className="main-comment clearfix">
            //         <img src={user ? user.avatar : ''} className="avatar">
            //
            //         </img>
            //         <div className="user-comment">
            //             <p><span>{user ? user.username : ''}</span>: {comment.comment}</p>
            //             <div className="time">
            //                 <span>{date.toLocaleString()}</span>
            //             </div>
            //         </div>
            //
            //     </div>
            //     <div className="comment-info clearfix">
            //         {/*<span>赞 (3)</span>*/}
            //         {/*<span>回复</span>*/}
            //     </div>
            // </div>
        );
    }
}