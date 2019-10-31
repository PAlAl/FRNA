import React from "react";
import OrderItem from "../../models/OrderItem";
import {FlatList, StyleSheet} from "react-native";
import TextView from "../../components/TextView";

export interface OrderItemViewProps {
    items: OrderItem[];
}

const styles = StyleSheet.create({
    mainContainer: {
        flex: 1,
    },
});

export default class OrderItemsListView extends React.Component<OrderItemViewProps> {
    render() {
        return (
            <>
                <FlatList style={styles.mainContainer}
                          data={this.props.items}
                          keyExtractor={item => item.productId}
                          renderItem={(info) =>
                              <TextView
                                  textSize={25}>{info.item.name} {info.item.count} {info.item.totalPrice}</TextView>
                          }
                />
            </>
        )
    }
}