import { GET, POST, PATCH, DELETE } from '../../../src/api/api';
export const SET_USERS = 'SET_USERS';


export const setUsers = (users) => ({
    type : SET_USERS,
    users
});


export function getUsers() {
    return dispatch => GET('/users')
        .then((users) => {
            return dispatch(setUsers(users))
        }).catch((err) => {
            console.log(err);
        })

}
