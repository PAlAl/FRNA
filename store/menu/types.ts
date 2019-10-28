import MenuItem from "../../models/MenuItem";

export const ADD_TO_FAVORITE = "@@menu/ADD_TO_FAVORITE";

export interface MenuState {
    menu: MenuItem[]
}