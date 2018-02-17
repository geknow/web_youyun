import './index.scss';
import React from 'react';

import 'font-awesome/scss/font-awesome.scss';


import {Link} from 'react-router-dom';
import {findDOMNode} from 'react-dom';
import SquareItem from './SquareItem/index.jsx';
import {forumFiles} from '../../actions/ShareForum';

export default class SquareItems extends React.Component {


    async componentWillMount() {
        console.log(this.props);
        let res = await forumFiles(this.props);
        let {loadingFinish} = this.props;
        loadingFinish(res);
    }

    render() {
        let {loading, data, showFile} = this.props;
        let listItems;
        if (!!data) {
            listItems = data.map((item) =>
                <SquareItem data={item} key={item.id} showFile={showFile}/>
            );
        }
        return loading ? null : (
            <div className="square-items-container">
                {!!listItems && listItems}
            </div>
        );
    }
}
