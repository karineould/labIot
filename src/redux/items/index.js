import { SET_ITEMS } from './actions';

const initialState = [];

const items = (state = initialState, action) => {
    switch(action.type) {
        case SET_ITEMS:
            return action.items;
        default:
            return state;
    }
};

export default items;
