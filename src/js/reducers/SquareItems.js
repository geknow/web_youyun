/* eslint-disable no-case-declarations */
let initStat = {
    page: 1,
    size: 10,
    time: true,
    hot: true,
    loading: true
};

const SquareItemsReducer = (state = initStat, action) => {
    let newState = {};
    Object.assign(newState, state);
    Object.assign(newState, action.data);
    switch (action.type) {
        case 'loadingFinish':
            newState['loading'] = false;
            break;
        case 'showFile':
            break;
        default:
            break;
    }
    return newState;
};

export default SquareItemsReducer;