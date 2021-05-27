import { useEffect } from 'react';
import { Card } from '../Card';
import { useGenericContext } from '../Contexts/Context';
import { ItemProductList } from './Item-product-list'

const ProductList = ({products}: any) => {
    const { hideLoader} = useGenericContext();

    useEffect(()=>{
        hideLoader();
    }, [products])

    return(
        <Card padding="medium" >
            { products.map((item:any, index:number) => (
                <ItemProductList key={`product-${index}`} product={item}/>)
            )}
        </Card>
    )
}
export { ProductList }