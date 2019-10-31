import {Action} from "redux";
import {ADD_ORDER} from "./types";
import Order from "../../models/Order";

export interface AddOrder extends Action<typeof ADD_ORDER> {
    order: Order
}

export const addOrder = (order: Order): AddOrder => ({
    type: ADD_ORDER,
    order: order
});

export type OrderActionTypes = AddOrder

