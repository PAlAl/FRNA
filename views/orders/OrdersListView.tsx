import React from "react";
import Order from "../../models/Order";
import {FlatList, StyleSheet} from "react-native";
import OrderView from "./OrderView";

export interface OrdersListViewProps {
    orders: Order[]
}

const styles = StyleSheet.create({
    mainContainer: {
        flex: 1
    },
});

export default class OrdersListView extends React.Component<OrdersListViewProps> {
    render() {
        return (
            <>
                <FlatList style={styles.mainContainer}
                          data={this.props.orders}
                          keyExtractor={item => item.orderId}
                          renderItem={(info) =>
                              <OrderView order={info.item}/>
                          }
                />
            </>
        )
    }
}