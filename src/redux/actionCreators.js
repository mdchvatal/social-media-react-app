export const fetchTimeline = (userName) => (dispatch) => {
    return fetch('http://localhost:8080/users/' + userName + '/timeline')
        .then(response => response.json())
        .then(response => dispatch(fetchTimelineSucceeded(response)))
}

export const fetchTimelineSucceeded = (data) => ({
    type: FETCH_USER_TIMELINE_SUCCEEDED,
    payload: data
})