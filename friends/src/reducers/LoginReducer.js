import {
    POST_LOGIN_START,
    POST_LOGIN_SUCCESS,
    POST_LOGIN_FAILURE
} from '../actions/actions';

const initialLoginState = {
    loggedIn: false,
    userData: null,
    errors: null
}

export const LoginReducer = (state = initialLoginState, { type, payload }) => {
    switch (type) {
        case POST_LOGIN_START:
            return {
                ...state,
                loggedIn: false,
                userData: null,
                errors: null
            }
        case POST_LOGIN_SUCCESS:
            return {
                ...state,
                loggedIn: true,
                userData: payload,
                errors: null
            }
        case POST_LOGIN_FAILURE:
            return {
                ...state,
                loggedIn: false,
                userData: null,
                errors: payload
            }
        default:
            return state
    }
}