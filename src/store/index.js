import { applyMiddleware, createStore } from 'redux';
// import { persistStore } from 'redux-persist';
// import { logger } from 'redux-logger';
import thunk from 'redux-thunk';
import reducers from '../redux';

const middlewares = applyMiddleware(
    thunk,
);

const s = createStore(reducers, middlewares);
// const p = persistStore(s);

export const store = s;
// export const persistor = p;
