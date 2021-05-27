import { AUTHOR } from '../../../assets/constants';
import { messageProductDetails } from '../../../assets/properties';
import { Author } from '../../../entities/Author';
import { Product } from './../../../entities/Product';
import { IProductDetailRepository } from './../../../repositories/IProductDetailRepository';

export class ProductDetailsUseCase {

    private product:Product;
    private author:Author = AUTHOR;
    private failMessage = messageProductDetails;
    private isError: boolean;

    constructor(
        private productDetailRepository:IProductDetailRepository
    ) {}

    async execute(productId: string){
        this.isError = false;
        await this.getProductDetails(productId);
        await this.getProductDescription(productId);
        return this.dataParsed();
    }

     private async getProductDetails(productId: string){
        try {
            const data = await this.productDetailRepository.getProductDatails(productId)
            this.setProductData(data['data']);
        } catch (error) {
            this.isError = true;
            return {
                status:500,
                menssage: this.failMessage.failDetails
            }
        }
    }

    private async getProductDescription(productId: string){
        try {
            const data = await this.productDetailRepository.getProductDescription(productId)
            this.setProductDescription(data['data'])
        } catch (error) {
            this.isError = true;
            return {
                status:500,
                menssage: this.failMessage.failDescription
            }
        }
    }

    private dataParsed(){
    
        if(this.isError) {
            return {
                status:500,
                menssage: this.failMessage.failDescription
            }
        }

        return {
            author: this.author,
            item: this.product,
        };
    }

    private setProductData({ id, title, price, currency_id, thumbnail, condition, shipping, sold_quantity , pictures}) {
        this.product = {
            id,
            title,
            price: {
                currency: currency_id,
                amount: price,
                decimals: price.toLocaleString('pt-BR',{style: 'currency', currency:'BRL'}).replace('R$', '$')
            } ,
            condition,
            free_shipping: shipping?.free_shipping,
            picture: pictures,
            sold_quantity,
        }
    }

    private setProductDescription({plain_text}){
        this.product = { ...this.product, description: plain_text}
    }
}