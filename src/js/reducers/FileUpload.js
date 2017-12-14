/* eslint-disable no-case-declarations */
let initStat = {
    filename: null
};

const FileUploadReducer = (state = initStat, action) => {
    let newState = {};
    Object.assign(newState, state);
    Object.assign(newState, action.data);
    switch (action.type) {
        case 'selectFile':
            return newState;
        case 'changeValue':
            return newState;
        case 'redirect':
            return newState;
        case 'uploading':
            return newState;
        case 'progress':
            return newState;
        default:
            return newState;
    }
};

export default FileUploadReducer;