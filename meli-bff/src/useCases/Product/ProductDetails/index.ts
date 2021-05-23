import { ProductDetailsController } from './ProductDetailsController';
import { ProductDetailsUseCase } from './ProductDetailsUseCase';
import { ProductDetailRepository } from './../../../repositories/implementations/ProductDetailRepository';

const productDetailRepository = new ProductDetailRepository();
const productDetailsUseCase = new ProductDetailsUseCase(
    productDetailRepository
);

const productDetailsController = new ProductDetailsController(
    productDetailsUseCase
)

export { productDetailsUseCase, productDetailsController}