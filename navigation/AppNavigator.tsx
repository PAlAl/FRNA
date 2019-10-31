import {createStackNavigator} from "react-navigation-stack"
import {createAppContainer} from "react-navigation"
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

const defaultNavOptions = {
    headerStyle: {
        backgroundColor: Platform.OS === "android" ? Color.primary : ""
    },
    headerTitleStyle: {
        fontFamily: Constants.fontFamily,
        fontSize: 45
    },
    headerTintColor: Platform.OS === "android" ? "white" : Color.primary
}

const ProductsNavigator = createStackNavigator({
    Menu: MenuScreen,
    MenuItem: MenuItemDetailContainerScreen,
    Cart: CartScreenContainer
}, {
    navigationOptions: {
        drawerLabel: "Продукты",
        drawerIcon: ({tintColor}: any) => (
            <MaterialIcons name="add-shopping-cart" color={tintColor} size={23}/>
        )
    },
    defaultNavigationOptions: defaultNavOptions
});

const OrdersNavigator = createStackNavigator({
    Orders: OrderScreen
}, {
    navigationOptions: {
        drawerLabel: "Заказы",
        drawerIcon: ({tintColor}: any) => (
            <MaterialIcons name="list" color={tintColor} size={23}/>
        )
    },
    defaultNavigationOptions: defaultNavOptions
});

const DrawerNavigator = createDrawerNavigator({
    Products: ProductsNavigator,
    Orders: OrdersNavigator
}, {
    contentOptions: {
        activeTintColor: Color.primary
    }
});

export default createAppContainer(DrawerNavigator)


