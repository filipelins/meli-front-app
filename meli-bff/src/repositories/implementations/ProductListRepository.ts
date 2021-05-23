import axios from 'axios';
import { URL_MLA } from '../../assets/constants';
import { IProductListRepository } from './../IProductListRepository';

export class ProductListRepository implements IProductListRepository {
    async searchProductByname(productName: string, limit): Promise<any>{
        const path = `${URL_MLA}/search?q=`;
        const query = `${path}${productName}&limit=${limit}`
        return await axios.get(query);
    }
}

