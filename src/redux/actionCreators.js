import * as ActionTypes from './actionTypes';

export const fetchTimeline = () => (dispatch) => {
    return fetch('http://localhost:8080/users/matt/timeline')
        .then(response => response.json())
        .then(response => dispatch(fetchTimelineSucceeded(response)))
}

export const fetchTimelineSucceeded = (response) => ({
    type: ActionTypes.FETCH_USER_TIMELINE_SUCCEEDED,
    payload: response
})

export const addPost = (message) => (dispatch) => {
    const jsonMessage = {
        message: message,
    }

    return fetch('http://localhost:8080/users/matt/timeline', {
        method: "POST",
        body: JSON.stringify(jsonMessage),
        headers: {
            "Content-Type": "application/json"
        },
    })
    .then(response => response.json())
    .then(response => dispatch(addPostSucceeded(response)))
}

export const addPostSucceeded = (response) => (
    {
        type: ActionTypes.ADD_POST_SUCCEEDED,
        payload: response
    }
)