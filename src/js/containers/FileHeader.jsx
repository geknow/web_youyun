import {connect} from 'react-redux';
import React from 'react';
import {FileHeaderComponent} from '../components/index';

export default connect(
    (state) => {
        return {
            ...state.FileHeaderReducer
        };
    },
    (dispatch) => {
        return {
            showSettingHandle: () => {
                dispatch({
                    type: 'showSetting',
                    data: {}
                });
            },
            logout: () => {
                dispatch({
                    type: 'logout',
                    data: {
                        islogin: false
                    }
                });
            }
        };
    }
)(FileHeaderComponent);

