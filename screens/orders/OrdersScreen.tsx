import React from "react";
import {NavigationParams, NavigationScreenProp, NavigationState} from "react-navigation";
import TextView from "../../components/ui/TextView";
import {HeaderButtons, Item} from "react-navigation-header-buttons";
import CustomHeaderButton from "../../components/ui/HeaderButton";

interface OrdersScreenProps {
    navigation: NavigationScreenProp<NavigationState, NavigationParams>
}

export default class OrdersScreen extends React.Component<OrdersScreenProps> {

    static navigationOptions = ({navigation, screenProps, navigationOptions}: any) => {
        return {
            headerTitle: 'Заказы',
            headerLeft: () => (
                <HeaderButtons HeaderButtonComponent={CustomHeaderButton}>
                    <Item title={"Меню"}
                          iconName="menu"
                          onPress={() => {
                              navigation.toggleDrawer();
                          }}/>
                </HeaderButtons>
            )
        }
    };

    render() {
        return (
            <>
                <TextView textSize={26}>ЗАКАЗЫ</TextView>
            </>
        )
    }
}