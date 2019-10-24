import React from 'react';
import MenuView from "../components/MenuView";
import {ProductCategory} from "../models/enums/ProductCategory";
import {SceneMap, TabBar, TabView} from 'react-native-tab-view';
import {Dimensions, Platform} from "react-native";
import Color from "../constans/Color";
import TextView from "../components/TextView";

export default class MenuScreen extends React.Component {
    state = {
        index: 0,
        routes: [
            {key: 'first', title: 'Роллы'},
            {key: 'second', title: 'Салаты'},
            {key: 'third', title: 'Напитки'},
            {key: 'fourth', title: 'Десерты'},
            {key: 'fourth2', title: 'Десерты2'},
            {key: 'fourth3', title: 'Десерты3'},
            {key: 'fourth4', title: 'Десерты4'},
        ],
    };

    static navigationOptions = {
        headerTitle: 'Меню',
        headerStyle: {
            backgroundColor: Platform.OS == "android" ? Color.primary : "",
            borderBottomWidth: 0, // for ios
            elevation: 0// for android
        }
    };

    render() {
        return (
            <>
                <TabView
                    navigationState={this.state}
                    renderScene={SceneMap({
                        first: props => <MenuView category={ProductCategory.Rolls}/>,
                        second: props => <MenuView category={ProductCategory.Salads}/>,
                        third: props => <MenuView category={ProductCategory.Drinks}/>,
                        fourth: props => <MenuView category={ProductCategory.Desserts}/>,
                        fourth2: props => <MenuView category={ProductCategory.Desserts}/>,
                        fourth3: props => <MenuView category={ProductCategory.Desserts}/>,
                        fourth4: props => <MenuView category={ProductCategory.Desserts}/>
                    })}
                    onIndexChange={index => this.setState({index})}
                    initialLayout={{width: Dimensions.get('window').width}}

                    renderTabBar={props =>
                        <TabBar
                            {...props}
                            indicatorStyle={{backgroundColor: 'white'}}
                            style={{backgroundColor: Color.tabs}}
                            tabStyle={{width: 'auto'}}
                            scrollEnabled={true}
                            renderLabel={({route, focused, color}) => (
                                <TextView textSize={26} textColor={Color.defaultTextColor}>
                                    {route.title}
                                </TextView>
                            )}
                        />
                    }
                />

            </>
        )
    }
}