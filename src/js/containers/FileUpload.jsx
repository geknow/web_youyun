import {connect} from 'react-redux';
import React from 'react';
import {FileUploadBody, Footer} from '../components/index';
import FileHeaderContainer from './FileHeader';
import '../../scss/FileIndex.scss';
import {getmd5, uploadFile, checkUploadFile} from '../actions/MyFile/FileUploadBody/index';


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
            uploadFile: async (data) => {
                dispatch({
                    type: 'uploading',
                    data:{
                        uploading: true
                    }
                });
                let md5 = await getmd5(data);
                let body = data.body;
                body.md5 = md5;
                let result = await checkUploadFile(body);
                let code;
                if (!result.success) {
                    console.log('---');
                    dispatch({
                        type: 'progress',
                        data: {
                            progress: 100
                        }
                    });
                    code = result['msg'];
                } else {
                    code = await uploadFile(data.file,body,dispatch);
                }

                setTimeout(() => {
                    dispatch({
                        type: 'redirect',
                        data: {
                            extractCode: code,
                            filename: data.file.name,
                            redirect: true,
                            time: new Date(),
                            description: body.description
                        }
                    });
                }, 1000);
            }
        };
    }
)(FileUploadBody);

class FileUpload extends React.Component {
    render() {
        return (
            <div className="youyun-container">
                <FileHeaderContainer/>
                <FileUploadBodyContainer/>
                <Footer/>
            </div>
        );
    }
}

export default FileUpload;