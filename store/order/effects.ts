import Order from "../../models/Order";
import {AppState, ThunkResult} from "../index";
import {addOrder} from "./actions";
import {clearCart} from "../cart/actions";

export const addOrderEffect = (order: Order): ThunkResult<void, AppState> =>
    (dispatch) => {
        dispatch(addOrder(order));
        dispatch(clearCart());
    };