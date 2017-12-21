/* eslint-disable no-case-declarations */
let initStat = {};

const FilePersonalCenterReducer = (state = initStat, action) => {
    let newState = {};
    Object.assign(newState, state);
    Object.assign(newState, action.data);
    switch (action.type) {
        default:
            return newState;
    }
};

export default FilePersonalCenterReducer;