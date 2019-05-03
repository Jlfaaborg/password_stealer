<<<<<<< HEAD
import { createStore } from 'redux';

import reducer from "./reducers";

const store = createStore(reducer, (window as any).__REDUX_DEVTOOLS_EXTENSION__ &&
    (window as any).__REDUX_DEVTOOLS_EXTENSION__());
=======
import { createStore, compose, applyMiddleware } from 'redux';
import { createLogger } from 'redux-logger';
import thunkMiddleware from "redux-thunk";
import reducer from "./reducers";

const loggerMiddleware = createLogger();

const store = createStore(reducer, compose(applyMiddleware(thunkMiddleware, loggerMiddleware), (window as any).__REDUX_DEVTOOLS_EXTENSION__ && (window as any).__REDUX_DEVTOOLS_EXTENSION__()))
>>>>>>> first commit

export default store;