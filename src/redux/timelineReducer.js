import * as ActionTypes from './actionTypes';

export const TimelineData = (state = {
        errorMessage: null,
        status: 'idle',
        timeline: [{
            "id": 1,
            "user": {
                "id": 1,
                "followers": [],
                "userName": "matt"
            },
            "message": "Isn't everything so WONDERFUL?!",
            "date": "2021-07-30T19:26:02.000+00:00",
            "comments": []
        }]
    }, action) => {
    switch (action.type) {
        case ActionTypes.FETCH_USER_TIMELINE_SUCCEEDED:
            return {...state, errorMessage: null, status: 'succeeded', timeline: action.payload};

        case ActionTypes.FETCH_USER_TIMELINE_FAILED:
            return {...state, errorMessage: action.payload, status: 'failed', timeline: []};

        case ActionTypes.FETCH_USER_TIMELINE_LOADING:
            return {...state, errorMessage: null, status: 'loading'};
    
        default:
            return state;
    }
};