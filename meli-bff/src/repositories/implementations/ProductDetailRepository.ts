import axios from 'axios';
import { IProductDetailRepository } from '../IProductDetailRepository';
import { Product } from './../../entities/Product';
import { BASE_URL } from '../../assets/constants'

export class ProductDetailRepository implements IProductDetailRepository{
    private path = `${BASE_URL}/items/`;

    async getProductDatails(productId: string): Promise<Product> {
        const query = `${this.path}/${productId}`;
        const response:Product = await axios.get(query);
        return response;
    }

    async getProductDescription(productId: string): Promise<string> {
        const query = `${this.path}/${productId}/description`;
        const response:string = await axios.get(query);
        return response;
    }

}