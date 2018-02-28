import { combineReducers } from 'redux';
import auth from './auth';
import users from './users';
import user from './user';
import categories from './categories';

export default combineReducers({
    auth, users, user, categories
});
