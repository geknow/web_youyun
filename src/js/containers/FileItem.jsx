/**
 * Created by GEK on 2017/12/3.
 */

import {connect} from 'react-redux';
import React from 'react';
import {FileItemComponent} from '../components/index';


export default connect(
    (state) => {
        return {
            ...state.FileItemReducer
        };
    },
    (dispatch) => {
        return {
            getFileDetailFinish: (data) => {
                dispatch({
                    type: 'getFileDetailFinish',
                    data
                });
            },
            getCommentsFinish: (data) => {
                dispatch({
                   type: 'getCommentsFinish',
                   data
                });
            }
        };
    }
)(FileItemComponent);

