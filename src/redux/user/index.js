import { SET_USER } from './actions';

const initialState = [];

const users = (state = initialState, action) => {
    switch(action.type) {
        case SET_USER:
            return action.user;
        default:
            return state;
    }
};

export default users;
