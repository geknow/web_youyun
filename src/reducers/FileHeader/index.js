let initStat = {
    showSetting: false,
    messageCount:1
};

const FileHeaderReducer = (state = initStat, action) => {
    switch (action.type) {
        case 'showSetting':
            return {
                ...state,
                showSetting: !state.showSetting
            };
        default:
            return state;
    }
};

export default FileHeaderReducer;