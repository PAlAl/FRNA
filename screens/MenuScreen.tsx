import React from 'react'
import MenuView from "../components/MenuView"
import {ProductCategory} from "../models/enums/ProductCategory"
import {SceneMap, TabBar, TabView} from 'react-native-tab-view'
import {Dimensions} from "react-native"
import Color from "../constans/Color"
import TextView from "../components/TextView"
import {NavigationParams, NavigationScreenProp, NavigationState} from "react-navigation"

interface MenuScreenProps {
    navigation: NavigationScreenProp<NavigationState, NavigationParams>
}

export default class MenuScreen extends React.Component<MenuScreenProps> {
    state = {
        index: 0,
        routes: [
            {key: 'first', title: 'Роллы'},
            {key: 'second', title: 'Салаты'},
            {key: 'third', title: 'Напитки'},
            {key: 'fourth', title: 'Десерты'}
        ],
    };

    static navigationOptions = ({navigation, screenProps, navigationOptions}: any) => {
        return {
            headerTitle: 'Меню',
            headerStyle: {
                ...navigationOptions.headerStyle,
                borderBottomWidth: 0, // for ios
                elevation: 0// for android
            }
        }
    };

    render() {
        return (
            <>
                <TabView
                    navigationState={this.state}
                    renderScene={SceneMap({
                        first: props => <MenuView category={ProductCategory.Rolls} navigation={this.props.navigation}/>,
                        second: props => <MenuView category={ProductCategory.Salads}  navigation={this.props.navigation}/>,
                        third: props => <MenuView category={ProductCategory.Drinks}  navigation={this.props.navigation}/>,
                        fourth: props => <MenuView category={ProductCategory.Desserts}  navigation={this.props.navigation}/>
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
                                <TextView textSize={26} textColor={Color.tabsColor}>
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