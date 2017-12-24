/* eslint-disable no-case-declarations */
let initStat = {};

const SquareNavReducer = (state = initStat, action) => {
    let newState = {};
    Object.assign(newState, state);
    Object.assign(newState, action.data);
    switch (action.type) {
        case 'login':
            sessionStorage.setItem('loginToken', action.data.user.loginToken);
            if (action.data.islogin && state['rememberP']) {
                localStorage.setItem('loginToken', action.data.user.loginToken);
            }
            return newState;
        case 'changeValue':
            return newState;
        default:
            return newState;
    }
};

export default SquareNavReducer;