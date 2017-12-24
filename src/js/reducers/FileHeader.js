let initStat = {
    showSetting: false,
    messageCount: 1
};

const FileHeaderReducer = (state = initStat, action) => {
    let newState = {};
    Object.assign(newState, state);
    Object.assign(newState, action.data);
    switch (action.type) {
        case 'showSetting':
            return {
                ...newState,
                showSetting: !newState.showSetting
            };
        case 'logout':
            localStorage.removeItem('loginToken');
            sessionStorage.removeItem('loginToken');
            return newState;
        default:
            return newState;
    }
};

export default FileHeaderReducer;