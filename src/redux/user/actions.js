import { GET, POST, PUT, PATCH, DELETE } from '../../../src/api/api';
export const SET_USER = 'SET_USER';



export const setUser = (user) => ({
    type : SET_USER,
    user
});


export function putUser(userEmail, password) {
    let payload = JSON.stringify({
        email: userEmail,
        password: password
    });

    return dispatch => PUT('/users/create', payload)
        .then((response) => {
            return dispatch(setUser(response.user))
        }).catch((err) => {
            console.log(err);
        })

}

export function deleteUser(id) {
    return dispatch => DELETE('/users/'+ id)
        .then((user) => {
            return user;
        }).catch((err) => {
            console.log(err);
        })

}




export function getUser(id) {
    return dispatch => GET('/users/'+id)
        .then((user) => {
            return dispatch(setUser(user))
        }).catch((err) => {
            console.log(err);
        })

}
