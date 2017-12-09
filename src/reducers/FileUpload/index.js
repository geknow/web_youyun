let initStat = {
    filename: null
};

const FileUploadReducer = (state = initStat, action) => {
    switch (action.type) {
        case 'selectFile':
            return {
                ...state,
                filename: action.data.filename
            };
        default:
            return state;
    }
};

export default FileUploadReducer;