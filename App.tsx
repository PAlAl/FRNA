import React from 'react';
import {Component} from 'react';
import {createStore} from "redux"
import AppNavigator from "./navigation/AppNavigator"
import {rootReducer} from "./store";
import {Provider} from "react-redux";

export const uuidv4 = require('uuid/v4');

const store = createStore(rootReducer)

export default class App extends Component {
    render() {
        return (
            <Provider store={store}>
                <AppNavigator/>
            </Provider>
        )
    }
}