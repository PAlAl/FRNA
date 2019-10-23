import React from 'react';
import {Component} from 'react';
import {createStore, combineReducers} from "redux"
import {Provider} from "react-redux"
import {menuReducer} from "./store/menu/reduser"
import AppNavigator from "./navigation/AppNavigator"

const rootReducer = combineReducers({
    menu: menuReducer
})

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