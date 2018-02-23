import { GET, POST, PATCH, DELETE } from '../../../src/api/api';
export const SET_TOKEN = 'SET_TOKEN';
export const RESET_AUTH = 'RESET_AUTH';

export const setToken = (token, user_email, isLogged) => ({
    type : SET_TOKEN,
    token: token,
    user_email: user_email,
    isLogged: isLogged
});


export const resetAuth = () => ({
    type : RESET_AUTH,
    token: "",
    user_email: "",
    isLogged: false
});

export function getToken(user_email, password) {
    let payload = JSON.stringify({
        email: user_email,
        password: password
    });

    console.log(payload);
    return dispatch => POST('/users/authenticate', payload)
        .then((response) => {
            // console.log(response);
            if (response.success) {
                return dispatch(setToken(response.token, payload.email, true))
            }
        }).catch((err) => {
            console.log(err);
        })

}
