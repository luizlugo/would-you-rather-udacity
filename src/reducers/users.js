import { 
    RECEIVE_USERS,
    ADD_USER,
    ADD_QUESTION,
    SAVE_ANSWER
 } from '../actions/users';

export default function users(state = {}, action = {}) {
    switch (action.type) {
        case RECEIVE_USERS:
            return {
                ...state,
                ...action.users
            }
        case ADD_USER: 
            return {
                ...state,
                [action.user.id]: {
                    ...action.user
                }
            };
        case ADD_QUESTION:
            return {
                ...state,
                [action.question.author]: {
                    ...state[action.question.author],
                    questions: state[action.question.author].questions ? state[action.question.author].questions.concat(action.question.id) : [].concat(action.question.id)
                }
            }
        case SAVE_ANSWER:
            const { authedUser, qid, answer} = action.answer;
            return {
                ...state,
                [authedUser]: {
                    ...state[authedUser],
                    answers: {
                        ...state[authedUser].answers,
                        [qid]: answer
                    }
                }
            }
        default:
            return state;
    }
}