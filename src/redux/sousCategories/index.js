import { SET_SOUS_CATEGORIES } from './actions';

const initialState = [];

const sousCategories = (state = initialState, action) => {
    switch(action.type) {
        case SET_SOUS_CATEGORIES:
            return action.sousCategories;
        default:
            return state;
    }
};

export default sousCategories;
