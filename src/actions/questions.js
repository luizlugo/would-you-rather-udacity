import { _saveQuestion, _saveQuestionAnswer } from '../utils/_DATA';
import { showLoading, hideLoading } from 'react-redux-loading';
export const RECEIVE_QUESTIONS = 'RECEIVE_QUESTIONS';
export const ADD_QUESTION = 'ADD_QUESTION';
export const SAVE_ANSWER = 'SAVE_ANSWER';

export function receiveQuestions(questions) {
    return {
        type: RECEIVE_QUESTIONS,
        questions
    }
};

export function addQuestion(question) {
    return {
        type: ADD_QUESTION,
        question
    };
};

export function answerQuestion(answer) {
    return {
        type: SAVE_ANSWER,
        answer
    }
}

export function handleAddQuestion(question) {
    return (dispatch) => {
        dispatch(showLoading());
        _saveQuestion(question).then((_question) => {
            dispatch(addQuestion(_question));
            dispatch(hideLoading());
        })
    }
}

export function handleAnswerQuestion(answer) {
    return (dispatch) => {
        dispatch(showLoading());
        _saveQuestionAnswer(answer).then(() => {
            dispatch(answerQuestion(answer));
            dispatch(hideLoading());
        })
    }
}