import React from 'react';
import {FlatList, StyleSheet} from "react-native";
import {MENU} from "../data/mainData";
import MenuItemView from "../components/MenuItemView";
import {ProductCategory} from "../models/enums/ProductCategory";

export interface MenuViewStateProps {
    category: ProductCategory
}

const styles = StyleSheet.create({
    scene: {
        flex: 1,
    },
});

export default class MenuView extends React.Component<MenuViewStateProps> {
    render() {
        return (
            <>
                <FlatList style={styles.scene}
                    data={MENU.filter(it => it.productCategory == this.props.category)}
                    keyExtractor={item => item.productId}
                    renderItem={(info) => <MenuItemView item={info.item} onAddToCart={() => {
                    }} onViewDetail={() => {
                    }}/>}/>
            </>
        )
    }
}