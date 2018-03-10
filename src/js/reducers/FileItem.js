const FileItemReducer = (state, action) => {
    let newState = {};
    Object.assign(newState, state);
    switch (action.type) {
        case 'getFileDetailFinish':
            Object.assign(newState, {
                fileDetail: action.data
            });
            return newState;
        default:
            Object.assign(newState, {
                fileDetail: action.data
            });
            return newState;
    }
};

export default FileItemReducer;