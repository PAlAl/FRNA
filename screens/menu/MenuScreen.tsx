import React from 'react'
import {ProductCategory} from "../../models/enums/ProductCategory"
import {SceneMap, TabBar, TabView} from 'react-native-tab-view'
import {Dimensions, Platform} from "react-native"
import Color from "../../constans/Color"
import TextView from "../../components/ui/TextView"
import {NavigationParams, NavigationScreenProp, NavigationState} from "react-navigation"
import {MenuViewContainer} from "../../components/menu/list/MenuListViewContainer";
import {HeaderButtons, Item} from "react-navigation-header-buttons";
import CustomHeaderButton from "../../components/ui/HeaderButton";

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
            },
            headerRight: () => (
                <HeaderButtons HeaderButtonComponent={CustomHeaderButton}>
                    <Item title={"Корзина"}
                          iconName="shopping-cart"
                          onPress={() => {
                              navigation.navigate('Cart');
                          }}/>
                </HeaderButtons>)
        }
    };

    render() {
        return (
            <>
                <TabView
                    navigationState={this.state}
                    renderScene={SceneMap({
                        first: props => <MenuViewContainer category={ProductCategory.Rolls}
                                                           navigation={this.props.navigation}/>,
                        second: props => <MenuViewContainer category={ProductCategory.Salads}
                                                            navigation={this.props.navigation}/>,
                        third: props => <MenuViewContainer category={ProductCategory.Drinks}
                                                           navigation={this.props.navigation}/>,
                        fourth: props => <MenuViewContainer category={ProductCategory.Desserts}
                                                            navigation={this.props.navigation}/>
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