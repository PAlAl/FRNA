import Cart from "../../models/Cart";
import {CartActionTypes} from "./actions";
import {ADD_TO_CART, CartState, REMOVE_FROM_CART} from "./types";
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
            const existItem: CartItem | undefined = updatedCart.items.find(item => item.productId === addedMenuItem.productId);
            if (existItem === undefined) {
                updatedCart.items.push(new CartItem(addedMenuItem.productId, addedMenuItem.name, 1, addedMenuItem.price, addedMenuItem))
            } else {
                existItem.count++;
                existItem.totalPrice += addedMenuItem.price;
            }
            return {...state, cart: updatedCart};
        }
        case REMOVE_FROM_CART: {
            const updatedCart: Cart = state.cart;
            const existItem: CartItem | undefined = updatedCart.items.find((item) => item.productId === action.productId);

            if (existItem !== undefined) {
                existItem.count--;

                if (existItem.count < 1) {
                    updatedCart.items.splice(state.cart.items.indexOf(existItem), 1);
                } else {
                    existItem.totalPrice = existItem.totalPrice - existItem.menuItem.price
                }
                return {...state, cart: new Cart(updatedCart.items)}
            }

        }
        default: {
            return state;
        }
    }
};