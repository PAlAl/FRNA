import React from "react";
import {View, Text, FlatList, Button, StyleSheet} from 'react-native';
import Color from "../../../modules/Color";
import TextView from "../../../components/TextView";
import CartItemView from "../../cart/CartItemView";
import {CartScreenProps} from "./CartScreenProps";
import Order from "../../../models/Order";
import {uuidv4} from "../../../App";
import OrderItem from "../../../models/OrderItem";

const styles = StyleSheet.create({
    screen: {
        margin: 20
    },
    summary: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginBottom: 20,
        padding: 10,
        shadowColor: 'black',
        shadowOpacity: 0.26,
        shadowOffset: {width: 0, height: 2},
        shadowRadius: 8,
        elevation: 5,
        borderRadius: 10,
        backgroundColor: 'white'
    },
    amount: {
        color: Color.primary
    }
});

export default class CartScreen extends React.Component<CartScreenProps> {

    static navigationOptions = ({navigation, screenProps, navigationOptions}: any) => {
        return {
            headerTitle: 'Корзина'
        }
    };

    render() {
        return (
            <View style={styles.screen}>
                <View style={styles.summary}>
                    <TextView textSize={24}>
                        Сумма:{' '}
                        <Text style={styles.amount}>${this.props.cart.cost().toFixed(2)}</Text>
                    </TextView>
                    <Button
                        onPress={() => {
                            this.props.onFinishOrderClick(new Order(uuidv4().toString(), this.props.cart.cost(),
                                this.props.cart.items.map((item) => new OrderItem(item.productId, item.menuItem.name, item.count, item.totalPrice))))
                        }}
                        color={Color.accent}
                        title="Заказать"
                        disabled={this.props.cart.items.length === 0}
                    />
                </View>
                <FlatList
                    data={this.props.cart.items.sort((a, b) =>
                        a.productId > b.productId ? 1 : -1
                    )}
                    keyExtractor={item => item.productId}
                    renderItem={itemData => (
                        <CartItemView
                            count={itemData.item.count}
                            name={itemData.item.name}
                            totalPrice={itemData.item.totalPrice}
                            onRemoveClick={this.props.onRemoveClick}
                            productId={itemData.item.productId}
                        />
                    )}
                />
            </View>
        )
    }
}