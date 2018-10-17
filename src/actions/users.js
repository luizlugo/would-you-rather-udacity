import {
    _addUser
} from '../utils/_DATA';
import { showLoading, hideLoading } from 'react-redux-loading';
export const RECEIVE_USERS = 'RECEIVE_USERS';
export const ADD_USER = 'ADD_USER';
export const ADD_QUESTION = 'ADD_QUESTION';
export const SAVE_ANSWER = 'SAVE_ANSWER';

export function receiveUsers(users) {
    return {
        type: RECEIVE_USERS,
        users
    };
}

export function addUser(user) {
    return {
        type: ADD_USER,
        user
    }
}

export function handleAddUser(user) {
    return ((dispatch) => {
        dispatch(showLoading());
        _addUser(user).then((newUser) => {
            dispatch(addUser(newUser));
            dispatch(hideLoading());
        })
    })
}