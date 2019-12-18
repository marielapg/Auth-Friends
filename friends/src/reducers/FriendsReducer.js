import {
    GET_FRIENDS_START,
    GET_FRIENDS_SUCCESS,
    GET_FRIENDS_FAILURE,
    POST_FRIENDS_START,
    POST_FRIENDS_SUCCESS,
    POST_FRIENDS_FAILURE,
    PUT_FRIENDS_START,
    PUT_FRIENDS_SUCCESS,
    PUT_FRIENDS_FAILURE,
    DELETE_FRIENDS_START,
    DELETE_FRIENDS_SUCCESS,
    DELETE_FRIENDS_FAILURE
} from '../actions/actions'

const initialFriendState = {
    isLoading: false,
    friendData: [],
    errors: null
}

export const FriendsReducer = (state = initialFriendState, { type, payload }) => {
    switch (type) {
        case GET_FRIENDS_START:
            return {
                ...state,
                isLoading: true,
                friendData: [],
                errors: null
            }
        case GET_FRIENDS_SUCCESS:
            return {
                ...state,
                isLoading: false,
                friendData: payload,
                errors: null
            }
        case GET_FRIENDS_FAILURE:
            return {
                ...state,
                isLoading: false,
                friendData: [],
                errors: payload
            }
        case POST_FRIENDS_START:
            return {
                ...state,
                isLoading: true,
                friendData: [],
                errors: null
            }
        case POST_FRIENDS_SUCCESS:
            return {
                ...state,
                isLoading: false,
                friendData: payload,
                errors: null
            }
        case POST_FRIENDS_FAILURE:
            return {
                ...state,
                isLoading: false,
                friendData: [],
                errors: payload
            }
        default:
            return state
    }
}