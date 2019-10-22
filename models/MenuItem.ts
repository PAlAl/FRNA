import {ProductCategory} from "./enums/ProductCategory"

export default class MenuItem {
    public productId: string;
    public name: string;
    public productCategory: ProductCategory;
    public description: string;
    public imageSrc: string;
    public price: number;

    public constructor(productId: string, name: string, productCategory: ProductCategory, description: string, imageSrc: string, price: number) {
        this.productId = productId;
        this.name = name;
        this.productCategory = productCategory;
        this.description = description;
        this.imageSrc = imageSrc;
        this.price = price;
    }
}