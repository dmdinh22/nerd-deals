import React from 'react';
import { createStore, applyMiddleware, compose } from 'redux';
import { Provider } from 'react-redux';
import rootReducer from './store/index'
import Router from './router/router';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import './App.css';

const composeEnhancers =
    typeof window === 'object' &&
        window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?
        window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({}) : compose;

const enhancer = composeEnhancers(
    applyMiddleware(thunk, logger)
);

const store = createStore(
    rootReducer,
    { auth: { authenticated: localStorage.getItem('token') } },
    enhancer
);

const App = () => (
    <Provider store={store}> 
        <Router />
    </Provider>     
);

export default App;
