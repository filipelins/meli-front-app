import { ItemProductList } from './Item-product-list'
import styles from './styles.module.scss'

const ProductList = (props: any) => {

    const { items } = props;

    console.log(items);
    

    return(
        <section className={styles.listContainer}>
            <div className={styles.container}>
                { items.map((item:any) => <ItemProductList product={item}/> ) }
            </div>
        </section>
    )
}

export { ProductList }