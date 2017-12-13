/**
 * Created by GEK on 2017/12/3.
 */
import {connect} from 'react-redux';
import React from 'react';
import {FileExtractCodeBody, Footer} from '../components/index';
import FileHeaderContainer from './FileHeader';
import '../scss/FileIndex.scss';


const FileExtractCodeBodyContainer = connect(
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
)(FileExtractCodeBody);

class FileExtractCode extends React.Component {
    render() {
        return (
            <div className="youyun-container">
                <FileHeaderContainer/>
                <FileExtractCodeBodyContainer/>
                <Footer/>
            </div>
        );
    }
}

export default FileExtractCode;