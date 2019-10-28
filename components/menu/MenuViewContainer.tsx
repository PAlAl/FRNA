import React, {Component} from "react";
import {MenuContainerViewProps, MenuViewDispatchProps, MenuViewProps} from "./MenuViewProps";
import {ThunkDispatch} from "redux-thunk";
import {addToCart, CartActionTypes} from "../../store/cart/actions";
import MenuView from "./MenuView";
import {CartState} from "../../store/cart/types";
import MenuItem from "../../models/MenuItem";
import {connect} from "react-redux";
import {AppState} from "../../store";

class MenuViewContainer extends Component<MenuViewProps> {
    constructor(props: MenuViewProps) {
        super(props);
    }

    render() {
        return (<MenuView {...this.props} />);
    }
}

const mapStateToProps = (appState: AppState) => {
    return {}
};

const mapDispatchToProps = (dispatch: ThunkDispatch<CartState, any, CartActionTypes>): MenuViewDispatchProps => {
    return {
        addToCart: (menuItem: MenuItem) => dispatch(addToCart(menuItem))
    };
};

const connectedContractContainer = connect(mapStateToProps, mapDispatchToProps)(MenuViewContainer);

export {connectedContractContainer as MenuViewContainer};
