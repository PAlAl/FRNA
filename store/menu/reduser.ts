import MenuItem from "../../models/MenuItem";
import {MENU} from "../../data/mainData";
import {MenuActionTypes} from "./actions";

export interface MenuState {
    items: MenuItem[]
}

const defaultState: MenuState = {
    items: MENU
}

export const menuReducer = (state: MenuState = defaultState, action: MenuActionTypes): MenuState => {
    return state
}