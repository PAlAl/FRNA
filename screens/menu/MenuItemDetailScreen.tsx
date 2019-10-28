import React from 'react'
import {StyleSheet, View} from 'react-native'
import TextView from "../../components/ui/TextView"
import {MENU} from "../../data/mainData";
import MenuItem from "../../models/MenuItem";
import MenuItemDetailView from "../../components/menu/details/MenuItemDetailView";
import {AppState} from "../../store";
import {CartState} from "../../store/cart/types";
import {addToCart, CartActionTypes} from "../../store/cart/actions";
import {
    MenuItemDetailDispatchProps,
    MenuItemDetailScreenNavigationType,
    MenuItemDetailScreenProps
} from "./MenuItemDetailScreenProps";
import {connect} from "react-redux";
import {ThunkDispatch} from 'redux-thunk';

const styles = StyleSheet.create({});

export class MenuItemDetailScreen extends React.Component<MenuItemDetailScreenProps> {

    static navigationOptions = ({navigation}: { navigation: MenuItemDetailScreenNavigationType }) => {
        return {
            headerTitle: 'Детали о продукте'
        }
    };

    render() {
        let menuItemId = this.props.navigation.state.params ? this.props.navigation.state.params.menuItemId : '';
        let menuItem: MenuItem | undefined = MENU.find(it => it.productId == menuItemId);
        return (
            menuItem !== undefined ?
                <View style={{flex: 1}}>
                    <MenuItemDetailView
                        name={menuItem.name}
                        description={menuItem.description}
                        price={menuItem.price}
                        image={menuItem.imageSrc}
                        addToCart={() => {
                            this.props.addToCart(menuItem as MenuItem)
                        }}
                    />
                </View> :
                <View style={{flex: 1}}>
                    <TextView flexStyle={{flex: 1}} textSize={35}>Продукт не найден</TextView>
                </View>
        )
    }
}

const mapStateToProps = (appState: AppState) => {
    return {}
};

const mapDispatchToProps = (dispatch: ThunkDispatch<CartState, any, CartActionTypes>): MenuItemDetailDispatchProps => {
    return {
        addToCart: (menuItem: MenuItem) => dispatch(addToCart(menuItem))
    };
};

const connectedContractContainer = connect(mapStateToProps, mapDispatchToProps)(MenuItemDetailScreen);

export {connectedContractContainer as MenuItemDetailContainerScreen};