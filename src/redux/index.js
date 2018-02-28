import { combineReducers } from 'redux';
import auth from './auth';
import users from './users';
import user from './user';
import categories from './categories';
import sousCategories from './sousCategories';

export default combineReducers({
    auth, users, user, categories, sousCategories
});
