import { Price } from "./Price";

export class Product  { 
    public readonly id: string;
    public readonly title: string;
    public readonly price: Price;
    public readonly picture: string;
    public readonly sold_quantity?: number;
    public readonly condition: string;
    public readonly state_name?: string;
    public readonly description?: string ; 
    public readonly free_shipping: boolean;

    constructor(props: Product) {
        Object.assign(this, props);
    }   
}