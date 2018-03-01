import { combineReducers } from 'redux';
import auth from './auth';
import users from './users';
import user from './user';
import categories from './categories';
import categorie from './categorie';
import sousCategories from './sousCategories';
import items from './items';
import emprunts from './emprunts'

export default combineReducers({
    auth, users, user, categories, categorie, sousCategories, items, emprunts
});
