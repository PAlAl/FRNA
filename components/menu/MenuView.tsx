import React from 'react'
import {FlatList, StyleSheet} from "react-native"
import {MENU} from "../../data/mainData"
import MenuItemView from "./MenuItemView"
import {MenuItemDetailScreenNavigationParams} from "../../screens/MenuItemDetailScreen";
import {MenuViewProps} from "./MenuViewProps";

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