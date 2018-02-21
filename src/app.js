import React from 'react';
import ReactDOM from 'react-dom';
// import { AppContainer } from 'react-hot-loader';
import { BrowserRouter } from 'react-router-dom';
// import { createStore, applyMiddleware, compose } from 'redux';
// import thunk from 'redux-thunk';
// import { Provider } from 'react-redux';
// import gamers from './redux/index';
import App from './components/App';
import './index.html';

// const store = createStore(gamers, compose(
//     applyMiddleware(thunk)
// ));

const container = document.getElementById('app-container');

// Render App
ReactDOM.render(
    <BrowserRouter>
        {/*<Provider store={store} >*/}
            <App />
        {/*</Provider>*/}
    </BrowserRouter>,
    container
);


// Hot module reloading
if (module.hot) {
    module.hot.accept('./components/App', () => {
        ReactDOM.render(
            <BrowserRouter>
                {/*<Provider store={store} >*/}
                    <App />
                {/*</Provider>*/}
            </BrowserRouter>
            ,container
        );
    });
}
