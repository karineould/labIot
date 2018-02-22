import { API_URL } from '../../constants';
export const SET_TOKEN = 'SET_TOKEN';


export const setToken = (token) => ({
    type : SET_TOKEN,
    token: token
});


export function getToken(user_email, password) {
    payload = {
        email: user_email,
        password: password
    };

    data = new FormData();
    data.append( "json", JSON.stringify( payload ) );

    fetch(`${API_URL}/users/authenticate`,
        {
            method: 'POST',
            body: data
        })
        .then(function(res){ return res.json(); })
        .then(function(data){ alert( JSON.stringify( data ) ) })

}
