import { SET_TOKEN } from './actions';

const initialState = {
    user_email: "",
    token: ""
};

const auth = (state = initialState, action) => {

    switch(action.type) {
        case SET_TOKEN:
            return Object.assign({}, state, {
                user_email: state.user_email,
                token: action.token
            });
        default:
            return state;
    }
};

export default auth;
