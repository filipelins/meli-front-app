import { useRouter } from 'next/dist/client/router'
import styles from './styles.module.scss'

const ItemProductList = ({product}: any) => {
    
    const router =  useRouter()
    const getDetails = () => {
        router.push({
            pathname: `/items/[id]`,
            query: { id: product.id },
        })
    }

    return(
        <section className={styles.container} onClick={()=> {
            getDetails()
        }}>
            <div className={styles.thumb}>
                <img src={product.picture} alt="" />
            </div>
            <div className={styles.details}>
                <div className={styles.infos}>
                    <div className={styles.price}>{product.price.decimals}</div>
                    <div className={styles.locale}>Manaus</div>
                </div>
                <div className={styles.title}>{product.title}</div>
            </div>
        </section>
    )
}

export { ItemProductList }