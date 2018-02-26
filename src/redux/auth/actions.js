import { GET, POST, PATCH, DELETE } from '../../../src/api/api';
export const SET_TOKEN = 'SET_TOKEN';
export const RESET_AUTH = 'RESET_AUTH';

export const setToken = (token, user_email, success, message = "") => ({
    type : SET_TOKEN,
    token: token,
    user_email: user_email,
    isLogged: success,
    error: {success: success, message: message}
});

export const resetAuth = () => ({
    type : RESET_AUTH,
    token: "",
    user_email: "",
    isLogged: false,
    error: {success: false, message: ""},
});

export function getToken(user_email, password) {
    let payload = JSON.stringify({
        email: user_email,
        password: password
    });

    return dispatch => POST('/authenticate', payload)
        .then((response) => {
            if (response.success) {
                return dispatch(setToken(response.token, payload.email, response.success))
            } else {
                return dispatch(setToken(response.token, payload.email, response.success, response.message))
            }
        }).catch((err) => {
            console.log(err);
        })

}
