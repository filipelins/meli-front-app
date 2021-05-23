import { ProductListController } from './ProductListController';
import { ProductListUseCase } from './ProductListUseCase';
import { ProductListRepository } from './../../../repositories/implementations/ProductListRepository';

const productListRepository = new ProductListRepository();
const productListUseCase = new ProductListUseCase(
    productListRepository
);
const productListController = new ProductListController(
    productListUseCase
)

export { productListUseCase, productListController}