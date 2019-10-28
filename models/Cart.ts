import CartItem from "./CartItem";

export default class Cart {
    public items: CartItem[];
    public cost: number;

    constructor(items: CartItem[] = [], cost: number = 0) {
        this.items = items;
        this.cost = cost
    }
}