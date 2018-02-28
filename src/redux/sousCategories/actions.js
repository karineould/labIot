import { GET, POST, PATCH, DELETE } from '../../../src/api/api';
export const SET_SOUS_CATEGORIES = 'SET_SOUS_CATEGORIES';

export const setSousCategories = (sousCategories) => ({
    type : SET_SOUS_CATEGORIES,
    sousCategories
});

export function getSousCategories(id) {
    const route = '/sousCategories/categorie/' + id;

    return dispatch => GET(route)
        .then((sousCategories) => {
            return dispatch(setSousCategories(sousCategories))
        }).catch((err) => {
            console.log(err);
        })

}
