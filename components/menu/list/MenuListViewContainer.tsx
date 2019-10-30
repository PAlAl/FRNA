import React, {Component} from "react";
import {MenuViewDispatchProps, MenuListViewProps} from "./MenuListViewProps";
import {ThunkDispatch} from "redux-thunk";
import {addToCart, CartActionTypes} from "../../../store/cart/actions";
import MenuListView from "./MenuListView";
import MenuItem from "../../../models/MenuItem";
import {connect} from "react-redux";
import {MenuState} from "../../../store/menu/types";
import {AppState} from "../../../store";

class MenuListViewContainer extends Component<MenuListViewProps> {
    constructor(props: MenuListViewProps) {
        super(props);
    }

    render() {
        return (<MenuListView {...this.props} />);
    }
}

const mapStateToProps = (appState: AppState) => {
    return {}
};

const mapDispatchToProps = (dispatch: ThunkDispatch<MenuState, any, CartActionTypes>): MenuViewDispatchProps => {
    return {
        addToCart: (menuItem: MenuItem) => dispatch(addToCart(menuItem))
    };
};

const connectedContractContainer = connect(mapStateToProps, mapDispatchToProps)(MenuListViewContainer);

export {connectedContractContainer as MenuViewContainer};
