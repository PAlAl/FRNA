import {MENU} from "../../data/mainData";
import {MenuActionTypes} from "./actions";
import {MenuState} from "./types";

const defaultState: MenuState = {
    menu: MENU
};

export const menuReducer = (state: MenuState = defaultState, action: MenuActionTypes): MenuState => {
    return state
};