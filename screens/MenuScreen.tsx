import React from 'react';
import {FlatList} from "react-native";
import {MENU} from "../data/mainData";
import MenuItemView from "../components/MenuItemView";

export default class MenuScreen extends React.Component {
    static navigationOptions = {
        headerTitle: 'Меню'
    };

    render() {
        return (
            <>
                <FlatList data={MENU} keyExtractor={item => item.productId}
                          renderItem={(info) => <MenuItemView item={info.item} onAddToCart={() => {
                          }} onViewDetail={() => {
                          }}/>}/>
            </>
        )
    }
}