import {NavigationScreenProp} from "react-navigation";
import {ProductCategory} from "../../../models/enums/ProductCategory";
import MenuItem from "../../../models/MenuItem";

export interface MenuContainerViewProps {
    navigation: NavigationScreenProp<any>
    category: ProductCategory
}

export interface MenuViewDispatchProps {
    addToCart: (menuItem:MenuItem) => void;
}

export type MenuListViewProps = MenuContainerViewProps & MenuViewDispatchProps
