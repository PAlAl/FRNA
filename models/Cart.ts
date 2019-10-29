import CartItem from "./CartItem";

export default class Cart {
    public items: CartItem[];

    constructor(items: CartItem[] = []) {
        this.items = items;
    }

    cost():number{
        return this.items.reduce<number>((sum:number, item:CartItem) => sum += item.totalPrice, 0)
    }
}