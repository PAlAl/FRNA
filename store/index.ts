import {CartState} from "./cart/types";
import {MenuState} from "./menu/types";
import {CartActionTypes} from "./cart/actions";
import {MenuActionTypes} from "./menu/actions";
import {combineReducers} from "redux";
import {menuReducer} from "./menu/reducer";
import {cartReducer} from "./cart/reducer";
import {ThunkAction} from "redux-thunk";

export interface AppState {
    cart: CartState;
    menu: MenuState;
}

export type RootAction = CartActionTypes | MenuActionTypes;

export type ThunkResult<R, S> = ThunkAction<R, S, any, RootAction>;

export const rootReducer = combineReducers({
    menu: menuReducer,
    cart: cartReducer
});

