import {connect} from 'react-redux';
import React from 'react';
import {FileDownloadComponent} from '../components/index';


export default connect(
    (state) => {
        return {
            ...state.FileDownloadReducer
        };
    },
    (dispatch) => {
        return {
            handleCodeErr: (data) => {
                dispatch({
                    type: 'codeerror',
                    data
                });
            }
        };
    }
)(FileDownloadComponent);
