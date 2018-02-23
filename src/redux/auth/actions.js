import { GET, POST, PATCH, DELETE } from '../../../src/api/api';
export const SET_TOKEN = 'SET_TOKEN';

export const setToken = (token, user_email) => ({
    type : SET_TOKEN,
    token: token,
    user_email: user_email
});


export function getToken(user_email, password) {
    let payload = {
        email: user_email,
        password: password
    };

    return dispatch => POST('/users/authenticate', payload)
        .then(function(res) {
            console.log(res);
            if (res.success) {
                return dispatch(setToken(res.token, payload.email))
            }

        })

}
