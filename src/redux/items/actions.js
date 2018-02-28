import { GET, POST, PATCH, DELETE } from '../../../src/api/api';
export const SET_ITEMS = 'SET_ITEMS';


export const setItems = (items) => ({
    type : SET_ITEMS,
    items
});


export function getItems() {
    return dispatch => GET('/items')
        .then((items) => {
            return dispatch(setItems(items))
        }).catch((err) => {
            console.log(err);
        })

}
