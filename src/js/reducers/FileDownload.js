let initStat = {};
const FileDownloadReducer = (state = initStat, action) => {
    let newState = {};
    Object.assign(newState, state);
    Object.assign(newState, action.data);
    switch (action.type) {
        case 'codeerror':
            return newState;
        default:
            return newState;
    }
};

export default FileDownloadReducer;