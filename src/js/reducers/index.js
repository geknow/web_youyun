import {combineReducers} from 'redux';
import FileHeaderReducer from './FileHeader/index';
import FileUploadReducer from './FileUpload/index';
import FileExtractCodeReducer from './FileExtractCode/index';

export default combineReducers({
    FileHeaderReducer,
    FileUploadReducer,
    FileExtractCodeReducer
});
