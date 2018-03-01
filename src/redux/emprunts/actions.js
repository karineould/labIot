import { GET, POST, PATCH, DELETE } from '../../../src/api/api';
export const SET_EMPRUNTS = 'SET_EMPRUNTS';


export const setEmprunts = (emprunts) => ({
    type : SET_EMPRUNTS,
    emprunts
});


export function getEmprunts() {
    return dispatch => GET('/emprunts')
        .then((emprunts) => {
            return dispatch(setEmprunts(emprunts))
        }).catch((err) => {
            console.log(err);
        })

}
