import { GET, POST, PUT, PATCH, DELETE } from '../../../src/api/api';
export const SET_CATEGORIE = 'SET_CATEGORIE';

export const setCategorie = (categorie) => ({
    type : SET_CATEGORIE,
    categorie
});

export function getCategorie(id) {
    return dispatch => GET('/categories/'+id)
        .then((categorie) => {
            return dispatch(setCategorie(categorie));
        }).catch((err) => {
            console.log(err);
        })

}
