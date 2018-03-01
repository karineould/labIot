import { GET, POST, PATCH, DELETE } from '../../../src/api/api';
import {getUsers} from "../users/actions";
import {PUT} from "../../api/api";
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


export function putItem(nom, categorie, sousCategorie, quantite) {
    let payload = {
        nom: nom,
        categorie: categorie,
        quantite: quantite
    };

    if (sousCategorie){
        payload["sousCategorie"] = sousCategorie
    }

    return dispatch => PUT('/items/create', JSON.stringify(payload))
        .then((item) => {
            return dispatch(getItems())
        }).catch((err) => {
            console.log(err);
        })

}

export function deleteItem(id) {
    return dispatch => DELETE('/items/'+ id)
        .then((item) => {
            return dispatch(getItems());
        }).catch((err) => {
            console.log(err);
        })

}
