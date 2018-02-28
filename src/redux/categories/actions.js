import { GET, POST, PATCH, DELETE } from '../../../src/api/api';
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
