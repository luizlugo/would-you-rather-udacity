import { receiveQuestions } from './questions';
import { receiveUsers } from './users';
import { _getUsers, _getQuestions } from '../utils/_DATA';
import { showLoading, hideLoading } from 'react-redux-loading';

export const INIT_DATA = 'INIT_DATA';

export function handleInitData() {
    return (dispatch) => {
        dispatch(showLoading());
        
        Promise
        .all([_getUsers(), _getQuestions()])
        .then(([users, questions]) => {
            dispatch(receiveUsers(users));
            dispatch(receiveQuestions(questions));
            dispatch(hideLoading());
        });
    }
}