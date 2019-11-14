import React from 'react';
import {Component} from 'react';
import {createStore, applyMiddleware} from "redux"
import AppNavigator from "./navigation/AppNavigator"
import {rootReducer} from "./store";
import {Provider} from "react-redux";
import thunk from "redux-thunk";

export const uuidv4 = require('uuid/v4');

const store = createStore(rootReducer, applyMiddleware(thunk))

export default class App extends Component {
    render() {
        return (
            <Provider store={store}>
                <AppNavigator/>
            </Provider>
        )
    }
}