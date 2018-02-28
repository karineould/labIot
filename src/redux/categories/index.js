import { SET_CATEGORIES } from './actions';

const initialState = [];

const categories = (state = initialState, action) => {
    switch(action.type) {
        case SET_CATEGORIES:
            return action.categories;
        default:
            return state;
    }
};

export default categories;
