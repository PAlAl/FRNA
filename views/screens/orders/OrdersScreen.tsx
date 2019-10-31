import React from "react";
import {NavigationParams, NavigationScreenProp, NavigationState} from "react-navigation";
import {HeaderButtons, Item} from "react-navigation-header-buttons";
import CustomHeaderButton from "../../../components/HeaderButton";
import OrdersListView from "../../orders/OrdersListView";
import {AppState} from "../../../store";
import {ThunkDispatch} from "redux-thunk";
import Order from "../../../models/Order";
import {OrderActionTypes} from "../../../store/order/actions";
import {connect} from "react-redux";

interface OrdersScreenNavigateProps {
    navigation: NavigationScreenProp<NavigationState, NavigationParams>
}

interface OrdersScreenDataProps {
    orders: Order[]
}

type OrdersScreenProps = OrdersScreenDataProps & OrdersScreenNavigateProps;

export class OrdersScreen extends React.Component<OrdersScreenProps> {

    static navigationOptions = ({navigation, screenProps, navigationOptions}: any) => {
        return {
            headerTitle: 'Заказы',
            headerLeft: () => (
                <HeaderButtons HeaderButtonComponent={CustomHeaderButton}>
                    <Item title={"Меню"}
                          iconName="menu"
                          onPress={() => {
                              navigation.toggleDrawer();
                          }}/>
                </HeaderButtons>
            )
        }
    };

    render() {
        return (
            <>
                <OrdersListView orders={this.props.orders}/>
            </>
        )
    }
}

const mapStateToProps = (appState: AppState): OrdersScreenDataProps => {
    return {orders: appState.orderState.orders}
};

const mapDispatchToProps = (dispatch: ThunkDispatch<AppState, any, OrderActionTypes>) => {
    return {};
};

export default connect(mapStateToProps, mapDispatchToProps)(OrdersScreen);