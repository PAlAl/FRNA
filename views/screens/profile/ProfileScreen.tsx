import React from "react";
import {NavigationParams, NavigationScreenProp, NavigationState} from "react-navigation";
import TextView from "../../../components/TextView";
import {HeaderButtons, Item} from "react-navigation-header-buttons";
import CustomHeaderButton from "../../../components/HeaderButton";

interface ProfileProps {
    navigation: NavigationScreenProp<NavigationState, NavigationParams>
}

export default class ProfileScreen extends React.Component<ProfileProps> {

    static navigationOptions = ({navigation, screenProps, navigationOptions}: any) => {
        return {
            headerTitle: 'Профиль',
            headerLeft: () => (
                <HeaderButtons HeaderButtonComponent={CustomHeaderButton}>
                    <Item title={"Меню"}
                          iconName="menu"
                          onPress={() => {
                              navigation.toggleDrawer();
                          }}/>
                </HeaderButtons>
            ),
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
                <TextView textSize={16}>Profile</TextView>
            </>
        )
    }
}