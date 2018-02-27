import { combineReducers } from 'redux';
import auth from './auth';
import users from './users';
import user from './user';

export default combineReducers({
    auth, users, user
});
