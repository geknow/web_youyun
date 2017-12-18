import {combineReducers} from 'redux';
import FileHeaderReducer from './FileHeader';
import FileUploadReducer from './FileUpload';
import FileExtractCodeReducer from './FileExtractCode';
import FileDownloadReducer from './FileDownload';
import SquareNavReducer from './SquareNav';
import SquareItemsReducer from './SquareItems';

export default combineReducers({
    FileHeaderReducer,
    FileUploadReducer,
    FileExtractCodeReducer,
    FileDownloadReducer,
    SquareNavReducer,
    SquareItemsReducer
});
