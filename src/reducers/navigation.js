import { HANDLE_NAVIGATION } from '../actions/navigation';

export default function navigation(state = 'dashboard', action = {}) {
    switch (action.type) {
        case HANDLE_NAVIGATION:
            return action.option
        default:
            return state;
    }
}