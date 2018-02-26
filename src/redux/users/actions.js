import { GET, POST, PATCH, DELETE } from '../../../src/api/api';
export const SET_USERS = 'SET_USERS';


export const setUsers = () => ({
    type : SET_USERS,

});


export function getUsers() {
    // let payload = JSON.stringify({
    //     email: user_email,
    //     password: password
    // });

    return dispatch => GET('/users')
        .then((response) => {

            console.log(response);
            if (response.success) {
                return dispatch(setUsers())
            } else {
                return dispatch(setUsers())
            }
        }).catch((err) => {
            console.log(err);
        })

}
