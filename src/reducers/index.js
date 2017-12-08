import {combineReducers} from 'redux';
import FileHeaderReducer from './FileHeader';
import FileUploadReducer from './FileUpload';

export default combineReducers({
    FileHeaderReducer,
    FileUploadReducer
});
