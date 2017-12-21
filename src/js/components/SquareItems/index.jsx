import './index.scss';
import React from 'react';

import 'font-awesome/scss/font-awesome.scss';


import {Link} from 'react-router-dom';
import {findDOMNode} from 'react-dom';
import SquareItem from './SquareItem/index.jsx';

export default class SquareItems extends React.Component {


    render() {
        return (
            <div className="square-items-container">
                <SquareItem/>
                <div className="item">
                    <div className="item__content">
                    </div>
                </div>
                <div className="item">
                    <div className="item__content item__content--small">
                    </div>
                </div>
                <SquareItem/>
                <SquareItem/>
                <div className="item">
                    <div className="item__content item__content--medium">
                    </div>
                </div>
                <div className="item">
                    <div className="item__content item__content--small">
                    </div>
                </div>
                <div className="item">
                    <div className="item__content item__content--medium">
                    </div>
                </div>
                <SquareItem/>
                <div className="item">
                    <div className="item__content">
                    </div>
                </div>
                <div className="item">
                    <div className="item__content item__content--large">
                    </div>
                </div>
                <SquareItem/>
                <SquareItem/>
                <div className="item">
                    <div className="item__content item__content--medium">
                    </div>
                </div>
                <div className="item">
                    <div className="item__content item__content--small">
                    </div>
                </div>
                <div className="item">
                    <div className="item__content">
                    </div>
                </div>
                <SquareItem/>
                <div className="item">
                    <div className="item__content item__content--large">
                    </div>
                </div>
                <div className="item">
                    <div className="item__content">
                    </div>
                </div>
                <div className="item">
                    <div className="item__content item__content--small">
                    </div>
                </div>
                <div className="item">
                    <div className="item__content item__content--large">
                    </div>
                </div>
                <div className="item">
                    <div className="item__content item__content--medium">
                    </div>
                </div>
                <SquareItem/>
                <div className="item">
                    <div className="item__content item__content--small">
                    </div>
                </div>
                <div className="item">
                    <div className="item__content item__content--medium">
                    </div>
                </div>
                <div className="item">
                    <div className="item__content">
                    </div>
                </div>
                <SquareItem/>
                <div className="item">
                    <div className="item__content item__content--small">
                    </div>
                </div>
                <SquareItem/>
            </div>
        );
    }
}
