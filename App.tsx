import React from 'react';
import {Component} from 'react';
import {
    SafeAreaView,
    ScrollView,
    View,
    StatusBar,
} from 'react-native';
import TextView from "./components/TextView";
import {createStore, combineReducers} from "redux"
import {Provider} from "react-redux"
import {menuReducer} from "./store/menu/reduser"

const rootReducer = combineReducers({
    menu: menuReducer
})

const store = createStore(rootReducer)

export default class App extends Component {
    render() {
        return (
            <Provider store={store}>
                <StatusBar barStyle="light-content"/>
                <SafeAreaView>
                    <ScrollView
                        contentInsetAdjustmentBehavior="automatic">
                        <View>
                            <TextView textSize={50}>First Title</TextView>
                        </View>
                    </ScrollView>
                </SafeAreaView>
            </Provider>
        )
    }
}