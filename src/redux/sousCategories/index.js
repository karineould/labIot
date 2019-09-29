import { SET_SOUS_CATEGORIES,SET_ALL_SOUS_CATEGORIES } from './actions';

const initialState = {
   sousCategories: []
};

const sousCategories = (state = initialState, action) => {
    switch(action.type) {
        case SET_SOUS_CATEGORIES:
            return {
              sousCategories: action.sousCategories
            };
        default:
            return state;
    }
};

export default sousCategories;
