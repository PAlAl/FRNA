import MenuItem from "./MenuItem";

export default class CartItem {
    public productId: string;
    public name: string;
    public count: number;
    public totalPrice: number;
    public menuItem: MenuItem;

    public constructor(productId: string, name: string, count:number, totalPrice:number, menuItem:MenuItem) {
        this.productId = productId;
        this.count = count;
        this.name = name;
        this.totalPrice = totalPrice;
        this.menuItem = menuItem;
    }
}