import { SET_EMPRUNTS } from './actions';

const initialState = [];

const emprunts = (state = initialState, action) => {
    switch(action.type) {
        case SET_EMPRUNTS:
            return action.emprunts;
        default:
            return state;
    }
};

export default emprunts;
