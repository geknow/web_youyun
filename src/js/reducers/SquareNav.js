/* eslint-disable no-case-declarations */
let initStat = {
    filename: null
};

const SquareNavReducer = (state = initStat, action) => {
    let newState = {};
    Object.assign(newState, state);
    Object.assign(newState, action.data);
    switch (action.type) {

        default:
            return newState;
    }
};

export default SquareNavReducer ;