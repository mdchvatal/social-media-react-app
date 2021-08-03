import * as ActionTypes from './actionTypes';

export const messageData = (state = {
    status: "idle",
    errorMessage: null,
    message: " ",
}, action) => {
    switch (action.type) {
        case ActionTypes.ADD_POST_SUCCEEDED:
            return {...state, errorMessage: null, message: action.payload, status: "succeeded"};

        case ActionTypes.ADD_POST_LOADING:
            return {...state, errorMessage: null, message: null, status: "loading"};

        case ActionTypes.ADD_POST_FAILED:
            return {...state, errorMessage: action.payload, message: null, status: "failed"};

        default:
            return state;
    }
        
}