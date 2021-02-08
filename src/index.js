import React from "react";
import ReactDOM from "react-dom";
import "./scss/main.scss";
import MainPage from "./js/App";
import * as serviceWorker from "./serviceWorker";
import allReducers from "./js/reducers/index.js";
import {createStore} from "redux";
import {Provider} from "react-redux";

const store = createStore(allReducers, window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__());


ReactDOM.render(<Provider store={store}><MainPage/></Provider>, document.getElementById("root"));
serviceWorker.unregister();
