import {connect} from 'react-redux';
import React from 'react';
import {FileUploadComponent} from '../components/index';
import {getmd5, uploadFile, checkUploadFile} from '../actions/FileUpload';


export default connect(
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
                    data: {
                        uploading: true
                    }
                });
                let md5 = await getmd5(data);
                let body = data.body;
                body.md5 = md5;
                let result = await checkUploadFile(body);
                let code;
                if (!result.success) {
                    dispatch({
                        type: 'progress',
                        data: {
                            progress: 100
                        }
                    });
                    code = result['msg'];
                } else {
                    code = await uploadFile(data.file, body, dispatch);
                }

                setTimeout(() => {
                    dispatch({
                        type: 'redirect',
                        data: Object.assign({
                            identifyCode: code,
                            name: data.file.name,
                            redirect: true,
                            createTime: new Date(),
                        }, body)
                    });
                }, 1000);
            }
        };
    }
)(FileUploadComponent);

