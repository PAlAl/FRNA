import React from "react";
import {Button, Image, ScrollView, StyleSheet, View} from "react-native";
import TextView from "../TextView";
import Color from "../../constans/Color";

interface MenuItemDetailViewProps {
    name: string;
    description: string;
    image: string;
    price: number;
}

const styles = StyleSheet.create({
    image: {
        width: '100%',
        height: 300
    },
    actions: {
        marginVertical: 10,
        alignItems: 'center'
    },
    price: {
        marginVertical: 20
    },
    description: {
        marginHorizontal: 20
    }
});

export default class MenuItemDetailView extends React.Component<MenuItemDetailViewProps> {
    render() {
        return (
            <ScrollView>
                <Image style={styles.image} source={{ uri: this.props.image}} />
                <View style={styles.actions}>
                    <Button color={Color.primary} title="Добавить в корзину" onPress={() => {}} />
                </View>
                <TextView textSize={25} textColor={"#888"} flexStyle={styles.price}>₽{this.props.price.toFixed(2)}</TextView>
                <TextView textSize={25} flexStyle={styles.description}>{this.props.description}</TextView>
            </ScrollView>
        )
    }
}