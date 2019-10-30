import {createStackNavigator} from "react-navigation-stack"
import {createAppContainer} from "react-navigation"
import {createDrawerNavigator} from 'react-navigation-drawer';
import MenuScreen from "../screens/menu/MenuScreen"
import OrderScreen from "../screens/orders/OrdersScreen"
import {MenuItemDetailContainerScreen} from "../screens/menu/MenuItemDetailScreen"
import Color from "../constans/Color"
import {Platform} from "react-native"
import Constants from "../constans/Constants";
import {CartScreenContainer} from "../screens/cart/CartScreenContainer";
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
    navigationOptions:{
    },
    defaultNavigationOptions: defaultNavOptions
});

const OrdersNavigator = createStackNavigator({
    Orders: OrderScreen
}, {
    navigationOptions:{},
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


