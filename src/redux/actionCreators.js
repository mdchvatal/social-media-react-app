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