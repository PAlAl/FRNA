import {createStackNavigator} from "react-navigation-stack"
import {createAppContainer} from "react-navigation"
import {createBottomTabNavigator} from "react-navigation-tabs"
import {createDrawerNavigator} from 'react-navigation-drawer';
import MenuScreen from "../views/screens/menu/MenuScreen"
import OrderScreen from "../views/screens/orders/OrdersScreen"
import {MenuItemDetailContainerScreen} from "../views/screens/menu/MenuItemDetailScreen"
import Color from "../modules/Color"
import {Platform} from "react-native"
import Constants from "../modules/Constants";
import {CartScreenContainer} from "../views/screens/cart/CartScreenContainer";
import React from "react";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import ProfileScreen from "../views/screens/profile/ProfileScreen";
import {createMaterialBottomTabNavigator} from "react-navigation-material-bottom-tabs";

const defaultNavOptions = {
    headerStyle: {
        backgroundColor: Platform.OS === "android" ? Color.primary : ""
    },
    headerTitleStyle: {
        fontFamily: Constants.fontFamily,
        fontSize: 45
    },
    headerTintColor: Platform.OS === "android" ? "white" : Color.primary
};

const ProductsNavigator = createStackNavigator({
    Menu: MenuScreen,
    MenuItem: MenuItemDetailContainerScreen,
    Cart: CartScreenContainer
}, {
    defaultNavigationOptions: defaultNavOptions
});

const ProfileNavigator = createStackNavigator({
    Profile: ProfileScreen
}, {
    defaultNavigationOptions: defaultNavOptions
});

const OrdersNavigator = createStackNavigator({
    Orders: OrderScreen
}, {
    defaultNavigationOptions: defaultNavOptions
});

const tabScreenConfig = {
    Products: {
        screen: ProductsNavigator,
        navigationOptions: {
            tabBarIcon: ({tintColor}: any) => {
                return (
                    <MaterialIcons name="add-shopping-cart" color={tintColor} size={23}/>
                );
            }
        }
    },
    Profile: {
        screen: ProfileNavigator,
        navigationOptions: {
            tabBarIcon: ({tintColor}: any) => {
                return (
                    <MaterialIcons name="accessible" color={tintColor} size={23}/>
                );
            }
        }
    }
};

const BottomTabNavigator =
    Platform.OS === 'android'
        ? createMaterialBottomTabNavigator(tabScreenConfig, {
            activeColor: "white",
            inactiveColor: "white",
            shifting: true,
            barStyle: {
                backgroundColor: Color.primary
            }
        })
        : createBottomTabNavigator(tabScreenConfig, {
            tabBarOptions: {
                labelStyle: {
                    fontFamily: 'open-sans'
                },
                activeTintColor: Color.accent
            }
        });

const DrawerNavigator = createDrawerNavigator({
    Products: {
        screen: BottomTabNavigator,
        navigationOptions: {
            drawerLabel: "Продукты",
            drawerIcon: ({tintColor}: any) => (
                <MaterialIcons name="add-shopping-cart" color={tintColor} size={23}/>
            )
        }
    },
    Orders: {
        screen: OrdersNavigator,
        navigationOptions: {
            drawerLabel: "Заказы",
            drawerIcon: ({tintColor}: any) => (
                <MaterialIcons name="list" color={tintColor} size={23}/>
            )
        }
    }
}, {
    contentOptions: {
        activeTintColor: Color.primary
    }
});

export default createAppContainer(DrawerNavigator)


