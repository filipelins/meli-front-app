import { Product } from '../entities/Product';

export interface IProductDetailRepository {
    getProductDatails(productId: string): Promise<Product>
    getProductDescription(productId: string): Promise<string>
}