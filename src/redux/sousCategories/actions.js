import { GET, POST, PUT, PATCH, DELETE } from '../../../src/api/api';
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

export function postSousCategories(id,idCateg) {
  const route = '/sousCategories/' + id;
  let payload = JSON.stringify({
      categorie: idCateg
  });
  return dispatch => POST(route,payload)
      .then((sousCategories) => {
          return dispatch(getSousCategories(id))
      }).catch((err) => {
          console.log(err);
      })
}

export function putSousCategories(id, nom) {

  let payload = JSON.stringify({
      categorie: id,
      nom: nom
  });
  return dispatch => PUT('/sousCategories/create',payload)
      .then(() => {
          return dispatch(getSousCategories(id))
      }).catch((err) => {
          console.log(err);
      })
}

export function resetSousCategories() {
    return dispatch => dispatch(setSousCategories([]))
}

export function deleteSousCategories(id,idCateg) {
  return dispatch => DELETE('/sousCategories/'+id)
      .then(() => {
          return dispatch(getSousCategories(idCateg))
      }).catch((err) => {
          console.log(err);
      })
}
