const FileExtractCodeReducer = (state = {}, action) => {
    let newState = {};
    Object.assign(newState, state);
    Object.assign(newState, action.data);
    switch (action.type) {

        default:
            return newState;
    }
};

export default FileExtractCodeReducer;