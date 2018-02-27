import { SET_TOKEN } from './actions';
import { SET_ERROR } from './actions';
import { RESET_AUTH } from './actions';

const initialState = {
    userEmail: "",
    token: "",
    isLogged: false,
    isAdmin: false,
    error: {
        success: false,
        message: {
            email: false,
            password: false
        }
    },
};

const auth = (state = initialState, action) => {

    switch(action.type) {
        case SET_TOKEN:
            return Object.assign({}, state, {
                userEmail: action.userEmail,
                token: action.token,
                isLogged: action.isLogged,
                isAdmin: action.isAdmin,
                error: action.error
            });
        case RESET_AUTH:
            return Object.assign({}, state, {
                userEmail: action.userEmail,
                token: action.token,
                isLogged: action.isLogged,
                isAdmin: action.isAdmin,
                error: action.error
            });
        default:
            return state;
    }
};

export default auth;
