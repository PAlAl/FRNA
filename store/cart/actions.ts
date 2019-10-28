import {Action} from "redux";
import {ADD_TO_CART, REMOVE_FROM_CART} from "./types";
import MenuItem from "../../models/MenuItem";

export interface AddToCart extends Action<typeof ADD_TO_CART> {
    menuItem: MenuItem
}

export interface RemoveFromCart extends Action<typeof REMOVE_FROM_CART> {
}

export const addToCart = (menuItem: MenuItem): AddToCart => ({
    type: ADD_TO_CART,
    menuItem: menuItem
});

export const removeFromCart = (): RemoveFromCart => ({
    type: REMOVE_FROM_CART
});

export type CartActionTypes = AddToCart | RemoveFromCart