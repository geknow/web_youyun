/* eslint-disable no-case-declarations */
let initStat = {
    filename: null
};

const FileUploadReducer = (state = initStat, action) => {
    let newState = {};
    Object.assign(newState, state);
    switch (action.type) {
        case 'selectFile':
            Object.assign(newState, action.data);
            return newState;
        case 'changeValue':
            Object.assign(newState, action.data);
            return newState;
        case 'uploadSuccess':
            Object.assign(newState, action.data);
            return newState;
        default:
            return newState;
    }
};

export default FileUploadReducer;