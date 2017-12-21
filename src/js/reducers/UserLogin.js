/* eslint-disable no-case-declarations */
let initStat = {};

const SquareNavReducer = (state = initStat, action) => {
    let newState = {};
    Object.assign(newState, state);
    Object.assign(newState, action.data);
    switch (action.type) {
        case 'login':
            return newState;
        case 'changeValue':
            return newState;
        default:
            return newState;
    }
};

export default SquareNavReducer;