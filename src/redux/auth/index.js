import { SET_TOKEN } from './actions';
import { RESET_AUTH } from './actions';

const initialState = {
    user_email: "",
    token: "",
    isLogged: false
};

const auth = (state = initialState, action) => {

    switch(action.type) {
        case SET_TOKEN:
            return Object.assign({}, state, {
                user_email: action.user_email,
                token: action.token,
                isLogged: action.isLogged
            });
        case RESET_AUTH:
            return Object.assign({}, state, {
                user_email: action.user_email,
                token: action.token,
                isLogged: action.isLogged
            });
        default:
            return state;
    }
};

export default auth;
