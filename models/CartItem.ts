export default class CartItem {
    public productId: string;
    public count: number;

    public constructor(productId: string, count:number) {
        this.productId = productId;
        this.count = count;
    }
}