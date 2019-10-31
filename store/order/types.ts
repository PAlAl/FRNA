import Order from "../../models/Order";

export const ADD_ORDER = "@@order/ADD_ORDER";

export interface OrderState {
    orders: Order[]
}