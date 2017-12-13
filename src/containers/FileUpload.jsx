
import {connect} from 'react-redux';
import React from 'react';
import {FileUploadBody,Footer } from '../components/index';
import FileHeaderContainer from './FileHeader';
import '../scss/FileIndex.scss';


const FileUploadBodyContainer = connect(
    (state) => {
        return {
            ...state.FileUploadReducer
        };
    },
    (dispatch) => {
        return {
            selectFile: (pathname) => {
                dispatch({
                    type: 'selectFile',
                    data: {
                        filename: pathname.trim()
                    }
                });
            },
            changeValue: (data) => {
                dispatch({
                    type: 'changeValue',
                    data
                });
            },
            uploadSuccess: (data) => {
                dispatch({
                    type: 'uploadSuccess',
                    data
                });
            }
        };
    }
)(FileUploadBody);

class FileUpload extends React.Component {
    render() {
        return (
            <div className="youyun-container">
                <FileHeaderContainer />
                <FileUploadBodyContainer/>
                <Footer/>
            </div>
        );
    }
}

export default FileUpload;