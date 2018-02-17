/**
 * Created by GEK on 2017/12/3.
 */

import {connect} from 'react-redux';
import React from 'react';
import {SquareNavComponent} from '../components/index';


export default connect(
    (state) => {
        return {
            ...state.SquareNavReducer
        };
    },
    (dispatch) => {
        return {

        };
    }
)(SquareNavComponent);


