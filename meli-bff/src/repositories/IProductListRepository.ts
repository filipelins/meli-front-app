export interface IProductListRepository {
    searchProductByname(productName: string, limit: number): Promise<any>
}