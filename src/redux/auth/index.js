import { SET_TOKEN } from './actions';
import { SET_ERROR } from './actions';
import { RESET_AUTH } from './actions';

const initialState = {
    user_email: "",
    token: "",
    isLogged: false,
    error: {success: false, message: ""},
};

const auth = (state = initialState, action) => {

    switch(action.type) {
        case SET_TOKEN:
            return Object.assign({}, state, {
                user_email: action.user_email,
                token: action.token,
                isLogged: action.isLogged,
                error: action.error
            });
        case RESET_AUTH:
            return Object.assign({}, state, {
                user_email: action.user_email,
                token: action.token,
                isLogged: action.isLogged,
                error: action.error
            });
        default:
            return state;
    }
};

export default auth;
