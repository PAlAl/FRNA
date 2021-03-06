import React, {Component} from "react";
import {ThunkDispatch} from "redux-thunk";
import {removeFromCart} from "../../../store/cart/actions";
import {connect} from "react-redux";
import {CartScreenDataProps, CartScreenDispatchProps, CartScreenProps} from "./CartScreenProps";
import CartScreen from "./CartScreen";
import {AppState, RootActionTypes} from "../../../store";
import Order from "../../../models/Order";
import {addOrderEffect} from "../../../store/order/effects";

class CartScreenContainer extends Component<CartScreenProps> {
    constructor(props: CartScreenProps) {
        super(props);
    }

    render() {
        return (<CartScreen {...this.props} />);
    }
}

const mapStateToProps = (appState: AppState): CartScreenDataProps => {
    return {cart: appState.cartState.cart}
};

const mapDispatchToProps = (dispatch: ThunkDispatch<AppState, any, RootActionTypes>): CartScreenDispatchProps => {
    return {
        onRemoveClick: (productId: string) => dispatch(removeFromCart(productId)),
        onFinishOrderClick: (order: Order) => dispatch(addOrderEffect(order))
    };
};

const connectedContractContainer = connect(mapStateToProps, mapDispatchToProps)(CartScreenContainer);

export {connectedContractContainer as CartScreenContainer};