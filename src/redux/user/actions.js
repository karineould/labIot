import { GET, POST, PUT, PATCH, DELETE } from '../../../src/api/api';
export const SET_USER = 'SET_USER';



export const setUser = (user) => ({
    type : SET_USER,
    user
});


export function getUser(id) {
    return dispatch => GET('/users/'+id)
        .then((user) => {
            return dispatch(setUser(user))
        }).catch((err) => {
            console.log(err);
        })

}
