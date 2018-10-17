export const SET_AUTHED_USER = 'SET_AUTHED_USER';
export const LOGOUT = 'LOGOUT';
export function setAuthedUser(authedUser) {
    return {
        type: SET_AUTHED_USER,
        authedUser
    };
}
export function handleLogout() {
    return {
        type: LOGOUT
    };
}