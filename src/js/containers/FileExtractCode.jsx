/**
 * Created by GEK on 2017/12/3.
 */
import {connect} from 'react-redux';
import React from 'react';
import {FileExtractCodeComponent} from '../components/index';


export default connect(
    (state) => {
        return {
            ...state.FileExtractCodeReducer,
            extractCode: state.FileUploadReducer.extractCode || null,
            filename: state.FileUploadReducer.filename || null,
            time: state.FileUploadReducer.time || null,
            description: state.FileUploadReducer.description || null
        };
    },
    (dispatch) => {
        return {};
    }
)(FileExtractCodeComponent);



