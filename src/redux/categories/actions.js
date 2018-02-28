import { GET, POST, PUT, PATCH, DELETE } from '../../../src/api/api';
export const SET_CATEGORIES = 'SET_CATEGORIES';

export const setCategories = (categories) => ({
    type : SET_CATEGORIES,
    categories
});

export function getCategories() {
    return dispatch => GET('/categories')
        .then((categories) => {
            return dispatch(setCategories(categories))
        }).catch((err) => {
            console.log(err);
        })

}

export function putCategories(label) {
    let payload = JSON.stringify({
        nom: label
    });
    return dispatch => PUT('/categories/create',payload)
        .then(() => {
            return dispatch(getCategories())
        }).catch((err) => {
            console.log(err);
        });
}