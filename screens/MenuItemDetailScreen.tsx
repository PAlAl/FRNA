import React from 'react'
import {StyleSheet, View} from 'react-native'
import TextView from "../components/TextView"
import {NavigationParams, NavigationScreenProp, NavigationState} from "react-navigation";
import {MENU} from "../data/mainData";
import MenuItem from "../models/MenuItem";
import MenuItemDetailView from "../components/MenuItemDetailView";

const styles = StyleSheet.create({});

export interface MenuItemDetailScreenNavigationParams extends NavigationParams {
    menuItemId: string;
}

type MenuItemDetailScreenNavigationType = NavigationScreenProp<NavigationState, MenuItemDetailScreenNavigationParams>;

interface MenuItemDetailScreenProps {
    navigation: MenuItemDetailScreenNavigationType;
}

export default class MenuItemDetailScreen extends React.Component<MenuItemDetailScreenProps> {

    static navigationOptions = ({navigation}: { navigation: MenuItemDetailScreenNavigationType }) => {
        return {
            headerTitle: 'Детали о продукте'
        }
    };

    render() {
        let menuItemId = this.props.navigation.state.params ? this.props.navigation.state.params.menuItemId : '';
        let menuItem: MenuItem | undefined = MENU.find(it => it.productId == menuItemId);
        return (
            menuItem !== undefined ?
                <View style={{flex: 1}}>
                    <MenuItemDetailView
                        name={menuItem.name}
                        description={menuItem.description}
                        price={menuItem.price}
                        image={menuItem.imageSrc}
                    />
                </View> :
                <View style={{flex: 1}}>
                    <TextView flexStyle={{flex: 1}} textSize={35}>Продукт не найден</TextView>
                </View>
        )
    }
}