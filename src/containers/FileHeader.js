import {connect} from 'react-redux';
import React from 'react';
import {FileHeader} from '../components/index';
import '../scss/FileIndex.scss';

const FileHeaderContainer = connect(
    (state) => {
        return {
            ...state.FileHeaderReducer
        };
    },
    (dispatch) => {
        return {
            showSettingHandle: () => {
                dispatch({
                    type: 'showSetting'
                });
            }
        };
    }
)(FileHeader);

export default FileHeaderContainer;