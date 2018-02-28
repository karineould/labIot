import { SET_CATEGORIE } from './actions';
const initialState = [];

const categorie = (state = initialState, action) => {
    switch(action.type) {
        case SET_CATEGORIE:
            return action.categorie;
        default:
            return state;
    }
};

export default categorie;
