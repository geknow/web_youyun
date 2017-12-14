import {combineReducers} from 'redux';
import FileHeaderReducer from './FileHeader';
import FileUploadReducer from './FileUpload';
import FileExtractCodeReducer from './FileExtractCode';

export default combineReducers({
    FileHeaderReducer,
    FileUploadReducer,
    FileExtractCodeReducer
});
