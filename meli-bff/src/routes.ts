import { Router } from "express";
import { productDetailsController } from "./useCases/Product/ProductDetails";
import { productListController } from "./useCases/Product/ProductList";

const router = Router();

router.get('/api/items', async(request, response) => {
    productListController.searchProduct(request, response)        
})

router.get('/api/items/:productId', async(request, response) => {
    productDetailsController.getProductDetails(request, response)
})

export { router }