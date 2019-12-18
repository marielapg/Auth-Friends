import axios from 'axios';

export const GET_FRIENDS_START = 'GET_FRIENDS_START';
export const GET_FRIENDS_SUCCESS = 'GET_FRIENDS_SUCCESS';
export const GET_FRIENDS_FAILURE = 'GET_FRIENDS_FAILURE';
export const POST_FRIENDS_START = 'POST_FRIENDS_START';
export const POST_FRIENDS_SUCCESS = 'POST_FRIENDS_SUCCESS';
export const POST_FRIENDS_FAILURE = 'POST_FRIENDS_FAILURE';
export const PUT_FRIENDS_START = 'POST_FRIENDS_START';
export const PUT_FRIENDS_SUCCESS = 'POST_FRIENDS_SUCCESS';
export const PUT_FRIENDS_FAILURE = 'POST_FRIENDS_FAILURE';
export const DELETE_FRIENDS_START = 'DELETE_FRIENDS_START';
export const DELETE_FRIENDS_SUCCESS = 'DELETE_FRIENDS_SUCCESS';
export const DELETE_FRIENDS_FAILURE = 'DELETE_FRIENDS_FAILURE';

export const POST_LOGIN_START = 'POST_LOGIN_START';
export const POST_LOGIN_SUCCESS = 'POST_LOGIN_SUCCESS';
export const POST_LOGIN_FAILURE = 'POST_LOGIN_FAILURE';

const token = {
    headers: { authorization: localStorage.getItem('token') }
}

const url = 'http://localhost:5000'

export const loginUser = (user) => dispatch => {
    dispatch({ type: POST_LOGIN_START })
    axios
        .post(`${url}/api/login`, user)
        .then(res => {
            localStorage.setItem('token', res.data.payload)
            dispatch({ type: POST_LOGIN_SUCCESS, payload: res.data.payload })
        })
        .catch(err => dispatch({ type: POST_LOGIN_FAILURE, payload: err.response }))
}

export const getFriends = () => dispatch => {
    dispatch({ type: GET_FRIENDS_START })
    axios
        .get(`${url}/api/friends`, token)
        .then(res => dispatch({ type: GET_FRIENDS_SUCCESS, payload: res.data }))
        .catch(err => dispatch({ type: GET_FRIENDS_FAILURE, payload: err.response }))
}

export const postFriend = (friendo) => dispatch => {
    dispatch({ type: POST_LOGIN_START })
    axios
        .post(`${url}/api/friends`, friendo, token)
        .then(res => dispatch({ type: POST_FRIENDS_SUCCESS, payload: res.data }))
        .catch(err => dispatch({ type: POST_FRIENDS_FAILURE, payload: err.response }))
}