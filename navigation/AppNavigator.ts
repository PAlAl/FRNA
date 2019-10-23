import {createStackNavigator} from "react-navigation-stack"
import {createAppContainer} from "react-navigation"
import MenuScreen from "../screens/MenuScreen"
import Color from "../constans/Color"
import {Platform} from "react-native"

const AppNavigator = createStackNavigator({
    Menu: MenuScreen
}, {
    defaultNavigationOptions: {
        headerStyle: {
            backgroundColor: Platform.OS == "android" ? Color.primary : ""
        },
        headerTintColor: Platform.OS == "android" ? "white" : Color.primary
    }
});

export default createAppContainer(AppNavigator);


