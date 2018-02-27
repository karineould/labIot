import { GET, POST, PATCH, DELETE } from '../../../src/api/api';
export const SET_TOKEN = 'SET_TOKEN';
export const RESET_AUTH = 'RESET_AUTH';

export const setToken = (token, userEmail, isAdmin, success, message = {email: false, password: false}) => ({
    type : SET_TOKEN,
    token: token,
    userEmail: userEmail,
    isAdmin: isAdmin,
    isLogged: success,
    error: {
        success: success,
        message: message
    }
});

export const resetAuth = () => ({
    type : RESET_AUTH,
    token: "",
    userEmail: "",
    isAdmin: false,
    isLogged: false,
    error: {
        success: false,
        message: {email: false, password: false}
    },
});

export function getToken(userEmail, password) {
    let payload = JSON.stringify({
        email: userEmail,
        password: password
    });

    return dispatch => POST('/authenticate', payload)
        .then((response) => {
            if (response.success) {
                return dispatch(setToken(response.token, userEmail, response.isAdmin, response.success))
            } else {
                console.log(response);
                return dispatch(setToken(
                    response.token,
                    payload.email,
                    response.isAdmin,
                    response.success,
                    response.message
                ))
            }
        }).catch((err) => {
            console.log(err);
        })

}
