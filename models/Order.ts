import OrderItem from "./OrderItem";

export default class Order {
    public orderId:string;
    public items:OrderItem[];
    public cost:number;

    constructor(orderId:string, cost:number, items: OrderItem[] = []) {
        this.items = items;
        this.orderId = orderId;
        this.cost = cost;
    }
}