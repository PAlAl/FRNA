import {createStackNavigator} from "react-navigation-stack"
import {createAppContainer} from "react-navigation"
import MenuScreen from "../screens/menu/MenuScreen"
import {MenuItemDetailContainerScreen} from "../screens/menu/MenuItemDetailScreen"
import Color from "../constans/Color"
import {Platform} from "react-native"
import Constants from "../constans/Constants";

const AppNavigator = createStackNavigator({
    Menu: MenuScreen,
    MenuItem: MenuItemDetailContainerScreen
}, {
    defaultNavigationOptions: {
        headerStyle: {
            backgroundColor: Platform.OS == "android" ? Color.primary : ""
        },
        headerTitleStyle: {
            fontFamily: Constants.fontFamily,
            fontSize: 45
        },
        headerTintColor: Platform.OS == "android" ? "white" : Color.primary
    }
});

export default createAppContainer(AppNavigator)


