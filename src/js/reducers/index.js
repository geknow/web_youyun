import {combineReducers} from 'redux';
import FileHeaderReducer from './FileHeader';
import FileUploadReducer from './FileUpload';
import FileExtractCodeReducer from './FileExtractCode';
import FileDownloadReducer from './FileDownload';
import SquareNavReducer from './SquareNav';
import SquareItemsReducer from './SquareItems';
import UserLoginReducer from './UserLogin';
import FilePersonalCenterReducer from './FilePersonCenter';
import FileItemReducer from './FileItem';

export default combineReducers({
    FileHeaderReducer,
    FileUploadReducer,
    FileExtractCodeReducer,
    FileItemReducer,
    FileDownloadReducer,
    SquareNavReducer,
    SquareItemsReducer,
    UserLoginReducer,
    FilePersonalCenterReducer
});
