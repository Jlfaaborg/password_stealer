import React from "react";
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'
import store from "./redux/store";
import "./css/index.css";
import Form from './container/Form';
import Table from "./container/Table";


ReactDOM.render(
    <Provider store={store}>
        <Form />
        <Table />
    </Provider>
    , document.getElementById('root'));