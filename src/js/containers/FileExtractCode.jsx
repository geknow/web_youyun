/**
 * Created by GEK on 2017/12/3.
 */
import {connect} from 'react-redux';
import React from 'react';
import {FileExtractCodeComponent} from '../components/index';


export default connect(
    (state) => {
        return {
            ...state.FileExtractCodeReducer
        };
    },
    (dispatch) => {
        return {};
    }
)(FileExtractCodeComponent);



