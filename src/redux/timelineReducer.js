import * as ActionTypes from './actionTypes';

export const TimelineData = (state = {
        errorMessage: null,
        status: 'idle',
        timeline: [{
            "id": 0,
            "user": {
                id: 0,
                userName: " ",
                name: " "
            },
            "message": "Tell the world about anything!",
            "date": new Date().toLocaleDateString(),
            "comments": [],
            "likes": [],
            "numberOfLikes": 0,
            "numberOfComments": 0
        }]
    }, action) => {
    switch (action.type) {
        case ActionTypes.FETCH_USER_TIMELINE_SUCCEEDED:
            return {...state, errorMessage: null, status: 'succeeded', 
                timeline: action.payload.sort((a, b) => (a.date < b.date) ? 1 : -1)};

        case ActionTypes.FETCH_USER_TIMELINE_FAILED:
            return {...state, errorMessage: action.payload, status: 'failed', timeline: []};

        case ActionTypes.FETCH_USER_TIMELINE_LOADING:
            return {...state, errorMessage: null, status: 'loading'};
    
        default:
            return state;
    }
};