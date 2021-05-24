import styles from './styles.module.scss'

const ItemProductList = ({product}: any) => {
      
    return(
        <section className={styles.container}>
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