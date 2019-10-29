export default class CartItem {
    public productId: string;
    public name: string;
    public count: number;
    public totalPrice: number;

    public constructor(productId: string, name: string, count:number, totalPrice:number) {
        this.productId = productId;
        this.count = count;
        this.name = name;
        this.totalPrice = totalPrice;
    }
}