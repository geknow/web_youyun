import {connect} from 'react-redux';


// common
import {Footer} from './Footer/index.jsx';

// file
import {FileHeader} from './MyFile/FileHeader/index.jsx';

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
import {FileBody} from './MyFile/FileBody/index.jsx';
import {FileItemBody} from './MyFile/FileItemBody/index.jsx';
import {FileUploadBody} from './MyFile/FileUploadBody/index.jsx';

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
                        filename:pathname.trim()
                    }
                });
            }
        };
    }
)(FileUploadBody);
import {FileExtractCodeBody} from './MyFile/FileExtractCodeBody/index.jsx';

import {HomePageBody} from './HomePageBody/index.jsx';
export {
    Footer,

    FileHeaderContainer,
    FileBody,
    FileItemBody,
    FileUploadBodyContainer,
    FileExtractCodeBody,
    HomePageBody
};