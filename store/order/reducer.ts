import {ADD_ORDER, OrderState} from "./types";
import {OrderActionTypes} from "./actions";

const defaultState: OrderState = {
    orders: []
};

export const orderReducer = (state: OrderState = defaultState, action: OrderActionTypes): OrderState => {
    switch (action.type) {
        case ADD_ORDER: {
            let newOrders = state.orders;
            newOrders.push(action.order);
            
            return {...state, orders: [...newOrders]}
        }
        default: {
            return state;
        }
    }
};