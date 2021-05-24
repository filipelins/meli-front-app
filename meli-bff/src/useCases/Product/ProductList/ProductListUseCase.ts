import { AUTHOR } from '../../../assets/constants';
import { Author } from '../../../entities/Author';
import { Product } from './../../../entities/Product';
import { IProductListRepository } from './../../../repositories/IProductListRepository';

export class ProductListUseCase {

    private products = [];
    private limitProducts = 4;
    private author:Author = AUTHOR;
    private failMessage = 'Ocorreu um erro durante na busca';

    constructor(private listProductRepository: IProductListRepository) {}

    async execute(productName: string) {
        this.products = [];

        try {
            const response = await this.listProductRepository.searchProductByname(productName, this.limitProducts);
            return this.filterProductData(response);
        } catch (error) {
           return {
                status: 500,
                message: this.failMessage
           }
        }
    }

    private filterProductData({data}){
        return {
            author: this.author,
            categories: this.getFiltersCategory(data),
            items: this.getProducts(data)
        };
    }

    private getFiltersCategory({filters}){ 
        const categoryFilter = filters.find(({id, values}) => id === 'category' && values?.length > 0);
        return categoryFilter ? this.getCategories(categoryFilter.values[0]) : [];
    }

    private getCategories({path_from_root}) {
        return path_from_root.map(({ name }) => name);
    }

    private getProducts({results}) {
        results.map(product => {
            this.products.push(this.setProduct(product));
        })
        return this.products;
    }

    private getPicture = (thumbnail, pictures) => {
        // Obtener primera imagen si está disponible, sino usar thumbnail
        // Parsear la url para obtener imagen de mejor calidad y a través de https
        const picture = pictures && pictures.length > 0 ? pictures[0].url : thumbnail;
        return picture.replace("-I", "-O").replace("http", "https");
    };

    private setProduct({ id, title, price, currency_id, thumbnail, condition, shipping, pictures }) {
        
        //ToDo: implementar logica para discover locale
        console.log(pictures);
        const product: Product = {
            id,
            title,
            price: {
                currency: currency_id,
                amount: price,
                decimals: price.toLocaleString('pt-BR',{style: 'currency', currency:'BRL'}).replace('R$', '$')
            } ,
            condition,
            free_shipping: shipping?.free_shipping,
            picture: this.getPicture(thumbnail, pictures)             
        }
        return product
    }
}
