import {CartActionTypes} from "./cart/actions";
import {MenuActionTypes} from "./menu/actions";
import {combineReducers} from "redux";
import {menuReducer} from "./menu/reducer";
import {cartReducer} from "./cart/reducer";
import {ThunkAction} from "redux-thunk";
import {OrderActionTypes} from "./order/actions";
import {orderReducer} from "./order/reducer";

export type RootActionTypes = CartActionTypes | MenuActionTypes | OrderActionTypes;

export type ThunkResult<R, S> = ThunkAction<R, S, any, RootActionTypes>;

export const rootReducer = combineReducers({
    menuState: menuReducer,
    cartState: cartReducer,
    orderState: orderReducer
});

export type AppState = ReturnType<typeof rootReducer>;

