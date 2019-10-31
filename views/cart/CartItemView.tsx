import React from "react";
import {
    View,
    StyleSheet,
    TouchableOpacity
} from 'react-native';
import TextView from "../../components/TextView";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";

interface CartItemViewProps {
    productId:string;
    name: string;
    count: number;
    totalPrice: number;
    onRemoveClick: (productId: string) => void;
}

const styles = StyleSheet.create({
    cartItem: {
        padding: 10,
        backgroundColor: 'white',
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginHorizontal: 20
    },
    itemData: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    deleteButton: {
        marginLeft: 20
    }
});

export default class CartItemView extends React.Component<CartItemViewProps> {
    render() {
        return (
            <View style={styles.cartItem}>
                <View style={styles.itemData}>
                    <TextView textColor={"#888"} textSize={18}>{this.props.count} </TextView>
                    <TextView textSize={18}>{this.props.name}</TextView>
                </View>
                <View style={styles.itemData}>
                    <TextView textSize={18}>${this.props.totalPrice.toFixed(2)}</TextView>
                    <TouchableOpacity onPress={() => {this.props.onRemoveClick(this.props.productId)}} style={styles.deleteButton}>
                        <MaterialIcons
                            name={'remove-shopping-cart'}
                            size={23}
                            color="red"
                        />
                    </TouchableOpacity>
                </View>
            </View>
        )
    }
}