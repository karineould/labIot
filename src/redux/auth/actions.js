import { API_URL } from '../../constants';
export const SET_TOKEN = 'SET_TOKEN';
import axios from 'axios';

export const setToken = (token) => ({
    type : SET_TOKEN,
    token: token
});


export function getToken(user_email, password) {
    let payload = {
        email: user_email,
        password: password
    };
    //
    // let data = new FormData();
    // data.append( "json", JSON.stringify( payload ) );

    return dispatch => axios({
        url: `${API_URL}/users/authenticate`,
        method: 'post',
        headers: {
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': '*',
            "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, PATCH, OPTIONS",
            "Access-Control-Allow-Headers": "X-Requested-With, content-type, Authorization"
        },
        data: JSON.stringify(payload)

    }).then(function(data){
        console.log(data);
            // setToken(data)
    });
        // .then(res => console.log(res))
        // .then(function(data){
        //     console.log(data);
        //     // setToken(data)
        // });

}
