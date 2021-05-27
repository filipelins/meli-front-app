import { ProductListUseCase } from './ProductListUseCase';
import { Request, Response } from "express";

export class ProductListController {

    public messageFail = 'Parametro de busca incorreto';
    
    constructor(
        private productListUseCase:ProductListUseCase
    ){}
    
    async searchProduct( resquest: Request, response: Response) {

        const { productName } = resquest.query;
        
        if(!productName) {
            response.status(500).json({message:this.messageFail})
            return;
        }

        const resp = await this.productListUseCase.execute(`${productName}`);
        const statusCode = (resp && resp['status']) ? 500 : 200;
        response.status(statusCode).json(resp)
    }

      
}