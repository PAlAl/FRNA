import Cart from "../../models/Cart";
import {CartActionTypes} from "./actions";
import {ADD_TO_CART, CartState} from "./types";
import MenuItem from "../../models/MenuItem";
import CartItem from "../../models/CartItem";

const defaultState: CartState = {
    cart: new Cart([])
};

export const cartReducer = (state: CartState = defaultState, action: CartActionTypes): CartState => {
    switch (action.type) {
        case ADD_TO_CART: {
            const addedMenuItem: MenuItem = action.menuItem;
            const updatedCart = state.cart;
            const existItem: CartItem | undefined = updatedCart.items.find(item => item.productId == addedMenuItem.productId);
            if (existItem === undefined) {
                updatedCart.items.push(new CartItem(addedMenuItem.productId, 1))
            } else {
                existItem.count++
            }
            return {...state, cart: updatedCart};
        }
        default: {
            return state;
        }
    }
};