import {combineReducers} from 'redux';
import { FriendsReducer } from './FriendsReducer';
import { LoginReducer } from './LoginReducer';

export default combineReducers ({
    FriendsReducer,
    LoginReducer
})