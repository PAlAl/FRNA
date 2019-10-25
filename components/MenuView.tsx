import React from 'react'
import {FlatList, StyleSheet} from "react-native"
import {MENU} from "../data/mainData"
import MenuItemView from "../components/MenuItemView"
import {ProductCategory} from "../models/enums/ProductCategory"
import {NavigationScreenProp} from "react-navigation"
import {MenuItemDetailScreenNavigationParams} from "../screens/MenuItemDetailScreen";

export interface MenuViewProps {
    navigation: NavigationScreenProp<any>
    category: ProductCategory
}

const styles = StyleSheet.create({
    mainContainer: {
        flex: 1,
    },
});

export default class MenuView extends React.Component<MenuViewProps> {
    createMenuItemDetailNavigationParams = (productId: string): MenuItemDetailScreenNavigationParams => {
        return {menuItemId: productId}
    };

    render() {
        return (
            <>
                <FlatList style={styles.mainContainer}
                          data={MENU.filter(it => it.productCategory == this.props.category)}
                          keyExtractor={item => item.productId}
                          renderItem={(info) =>
                              <MenuItemView item={info.item}
                                            onAddToCart={() => {
                                            }}
                                            onViewDetail={() => {
                                                this.props.navigation.navigate("MenuItem", this.createMenuItemDetailNavigationParams(info.item.productId))
                                            }}
                              />
                          }
                />
            </>
        )
    }
}