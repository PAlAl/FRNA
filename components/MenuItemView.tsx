import React from 'react'
import MenuItem from "../models/MenuItem"
import {View, Image, StyleSheet, Button} from 'react-native'
import Color from "../constans/Color"
import TextView from "./TextView";

export interface MenuItemStateProps {
    item: MenuItem,
    onViewDetail: () => void,
    onAddToCart: () => void,
}

const styles = StyleSheet.create({
    product: {
        shadowColor: 'black',
        shadowOpacity: 0.26,
        shadowOffset: {width: 0, height: 2},
        shadowRadius: 8,
        elevation: 5,
        borderRadius: 10,
        backgroundColor: 'white',
        height: 300,
        margin: 20
    },
    imageContainer: {
        width: '100%',
        height: '60%',
        borderTopLeftRadius: 10,
        borderTopRightRadius: 10,
        overflow: 'hidden'
    },
    image: {
        width: '100%',
        height: '100%'
    },
    details: {
        alignItems: 'center',
        height: '15%',
        padding: 10
    },
    title: {
        marginVertical: 4
    },
    actions: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        height: '25%',
        paddingHorizontal: 20
    }
});

export default class MenuItemView extends React.Component<MenuItemStateProps> {
    render() {
        return (
            <View style={styles.product}>
                <View style={styles.imageContainer}>
                    <Image style={styles.image} source={{uri: this.props.item.imageSrc}}/>
                </View>
                <View style={styles.details}>
                    <TextView flexStyle={styles.title} textSize={30}>{this.props.item.name}</TextView>
                    <TextView textSize={20} textColor={"#888888"}>₽{this.props.item.price.toFixed(2)}</TextView>
                </View>
                <View style={styles.actions}>
                    <Button
                        color={Color.primary}
                        title="Детали"
                        onPress={this.props.onViewDetail}
                    />
                    <Button
                        color={Color.primary}
                        title="В корзину"
                        onPress={this.props.onAddToCart}
                    />
                </View>
            </View>
        )
    }
}