import {combineReducers} from 'redux';
import FileHeaderReducer from './FileHeader';
import FileUploadReducer from './FileUpload';
import FileExtractCodeReducer from './FileExtractCode';
import FileDownloadReducer from './FileDownload';

export default combineReducers({
    FileHeaderReducer,
    FileUploadReducer,
    FileExtractCodeReducer,
    FileDownloadReducer
});
