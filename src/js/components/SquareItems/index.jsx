import './index.scss';
import React from 'react';

import 'font-awesome/scss/font-awesome.scss';

import MasonryLayout from 'react-masonry-layout';

import {Link} from 'react-router-dom';
import {findDOMNode} from 'react-dom';

export default class SquareItems extends React.Component {


    render() {
        return (
            <div className="App">

                <MasonryLayout
                    id="square-items-container"
                >
                    <div className="item item2">1</div>
                    <div className="item item4">2</div>
                    <div className="item item1">3</div>
                    <div className="item item1">4</div>
                    <div className="item item3">5</div>
                    <div className="item item4">6</div>
                    <div className="item item2">7</div>
                    <div className="item item2">8</div>
                    <div className="item item1">9</div>
                    <div className="item item1">10</div>
                    <div className="item item1">11</div>
                    <div className="item item3">12</div>
                </MasonryLayout>
            </div>
        );
    }
}
