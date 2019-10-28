import MenuItem from "../../models/MenuItem";
import {NavigationParams, NavigationScreenProp, NavigationState} from "react-navigation";

interface MenuItemDetailScreenNavigationParams extends NavigationParams {
    menuItemId: string;
}

export type MenuItemDetailScreenNavigationType = NavigationScreenProp<NavigationState, MenuItemDetailScreenNavigationParams>;

interface MenuItemDetailScreenDataProps {
    navigation: MenuItemDetailScreenNavigationType;
}

export interface MenuItemDetailDispatchProps {
    addToCart: (menuItem:MenuItem) => void;
}

export type MenuItemDetailScreenProps = MenuItemDetailScreenDataProps & MenuItemDetailDispatchProps

