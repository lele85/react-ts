import React from "react";
import { render } from "react-dom";
import { Provider } from "react-redux";
import { applyMiddleware, createStore } from "redux";
import thunk from "redux-thunk";

import Counter from "./components/Counter";
import User from "./components/User";
import { appReducer } from "./reducer/appReducer";
import { AppState } from "./state/AppState";
import Shows from "./components/Shows";
import { createLogger } from "redux-logger";
import { TestStyle } from "./components/TestStyle";
import { createTestMiddleware } from "./middlewares/testMiddleware";

const logger = createLogger({
    collapsed: true,
    diff: true
});

const testMiddleware: any = createTestMiddleware();

const store = createStore<AppState>(appReducer, applyMiddleware(thunk, logger, testMiddleware));

render(
    <Provider store={store}>
        <div>
            <User age={33} />
            <Counter />
            <Shows />
            <TestStyle />
        </div>
    </Provider>,
    document.getElementById("app")
);
