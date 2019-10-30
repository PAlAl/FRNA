import React, {Component} from "react";
import {ThunkDispatch} from "redux-thunk";
import {CartActionTypes, removeFromCart} from "../../store/cart/actions";
import {connect} from "react-redux";
import {CartScreenDataProps, CartScreenDispatchProps, CartScreenProps} from "./CartScreenProps";
import CartScreen from "./CartScreen";
import {CartState} from "../../store/cart/types";
import {AppState} from "../../store";

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

const mapDispatchToProps = (dispatch: ThunkDispatch<CartState, any, CartActionTypes>): CartScreenDispatchProps => {
    return {
        onRemoveClick: (productId: string) => dispatch(removeFromCart(productId))
    };
};

const connectedContractContainer = connect(mapStateToProps, mapDispatchToProps)(CartScreenContainer);

export {connectedContractContainer as CartScreenContainer};