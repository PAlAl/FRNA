import Cart from "../../models/Cart";

export const ADD_TO_CART = "@@cart/ADD_TO_CART";
export const REMOVE_FROM_CART = "@@cart/REMOVE_FROM_CART";
export const CLEAR_CART = "@@cart/CLEAR_CART";

export interface CartState {
    cart: Cart
}