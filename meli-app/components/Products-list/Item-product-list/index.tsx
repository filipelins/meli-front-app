import { useRouter } from 'next/dist/client/router'
import { useGenericContext } from '../../Contexts/Context';
import styles from './styles.module.scss'

const ItemProductList = ({product}: any) => {    
    const router =  useRouter();
    const { showLoader} = useGenericContext();

    const getDetails = () => {
        showLoader();
        router.push({
            pathname: `/items/[id]`,
            query: {  id: product.id },
        })
    }

    return(
        <div className={styles.cardContainer}>
            <section data-cy={`item-${product.id}`} className={styles.container} onClick={()=> {getDetails()}}>
                <div className={styles.thumb} data-cy="thumb">
                    <img className={styles.preview} src={product.picture} alt="" />
                </div>
                <div className={styles.details}>
                    <div className={styles.infos}>
                        <div data-cy="price" className={styles.price}>
                            {product.price.decimals}
                            {
                                product.free_shipping &&<img src="./ic_shipping.png" alt="" />
                            }
                        </div>
                        <div data-cy="state_name" className={styles.locale}>{product.state_name}</div>
                    </div>
                    <div data-cy="title" className={styles.title}>{product.title}</div>
                </div>
            </section>
        </div>
    )
}

export { ItemProductList }