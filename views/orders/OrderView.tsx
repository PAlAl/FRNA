import React from "react";
import {StyleSheet, View} from "react-native";
import TextView from "../../components/TextView";
import Order from "../../models/Order";
import LineView from "../../components/Line";
import OrderItemsListView from "./OrderItemsListView";

export interface OrderViewProps {
    order: Order
}

const styles = StyleSheet.create({
    orderItem: {
        shadowColor: 'black',
        shadowOpacity: 0.26,
        shadowOffset: {width: 0, height: 2},
        shadowRadius: 8,
        elevation: 5,
        borderRadius: 10,
        backgroundColor: 'white',
        margin: 20,
        padding: 10
    }
});

export default class OrderView extends React.Component<OrderViewProps> {
    render() {
        return (
            <View style={styles.orderItem}>
                <TextView textSize={36} textAlign={"left"}>Заказ:
                    #{this.props.order.orderId.substr(0, 4)}</TextView>
                <TextView textSize={34} textAlign={"left"}>Сумма: {this.props.order.cost}</TextView>
                <TextView textSize={34} textAlign={"left"}>Состав:</TextView>
                <OrderItemsListView items={this.props.order.items}/>
            </View>
        )
    }
}