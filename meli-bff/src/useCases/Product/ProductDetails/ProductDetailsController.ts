import { Response, Request, NextFunction } from 'express';
import { ProductDetailsUseCase } from './ProductDetailsUseCase';
export class ProductDetailsController {
    constructor(
        private productDetailsUseCase:ProductDetailsUseCase
    ) {}

    async getProductDetails(request:Request, response:Response) {
        const { productId } = request.params;
        const resp = await this.productDetailsUseCase.execute(`${productId}`);
        
        const statusCode = (resp && resp['status']) ? 500 : 200;
        response.status(statusCode).json(resp)
    }
}