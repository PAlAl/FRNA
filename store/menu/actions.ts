import {Action} from "redux";
import MenuItem from "../../models/MenuItem";
import {ADD_TO_FAVORITE} from "./types";

export interface AddToFavorite extends Action<typeof ADD_TO_FAVORITE> {
    menuItem: MenuItem
}

export const addToFavorite = (menuItem: MenuItem): AddToFavorite => ({
    type: ADD_TO_FAVORITE,
    menuItem: menuItem
});

export type MenuActionTypes = AddToFavorite

