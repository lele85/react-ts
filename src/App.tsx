import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { applyMiddleware, createStore } from 'redux';
import thunk from 'redux-thunk';

import Counter from './components/Counter';
import User from './components/User';
import { appReducer } from './reducer/appReducer';
import { AppState } from './state/AppState';
import Shows from './components/Shows';

const store = createStore<AppState>(appReducer, applyMiddleware(thunk));

render(
    <Provider store={store}>
        <div>
            <User age={33} />
            <Counter />
            <Shows />
        </div>
    </Provider>,
    document.getElementById("app")
);