import {NavigationParams, NavigationScreenProp, NavigationState} from "react-navigation";
import Cart from "../../models/Cart";

export interface CartScreenNavigationProps {
    navigation: NavigationScreenProp<NavigationState, NavigationParams>;
}

export interface CartScreenDataProps {
    cart: Cart;
}

export interface CartScreenDispatchProps {
    onRemoveClick: (productId: string) => void;
}

export type CartScreenProps = CartScreenDataProps & CartScreenDispatchProps & CartScreenNavigationProps