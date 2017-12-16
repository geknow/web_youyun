const FileDownloadReducer = (state = {}, action) => {
    let newState = {};
    Object.assign(newState, state);
    Object.assign(newState, action.data);
    switch (action.type) {
        case 'codeerror':
            return newState;
        default:
            return state;
    }
};

export default FileDownloadReducer;