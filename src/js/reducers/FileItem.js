const FileItemReducer = (state, action) => {
    let newState = {};
    Object.assign(newState, action);
    switch (action.type) {
        case 'getFileDetailFinish':
        default:
            return newState;
    }
};

export default FileItemReducer;