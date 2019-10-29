import React from 'react'
import {FlatList, StyleSheet} from "react-native"
import {MENU} from "../../../data/mainData"
import MenuItemView from "./MenuItemView"
import {MenuListViewProps} from "./MenuListViewProps";
import {MenuItemDetailScreenNavigationParams} from "../../../screens/menu/MenuItemDetailScreenProps";

const styles = StyleSheet.create({
    mainContainer: {
        flex: 1,
    },
});

export default class MenuListView extends React.Component<MenuListViewProps> {
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
                                                this.props.addToCart(info.item)
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