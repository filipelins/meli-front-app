import { useGenericContext } from '../Contexts/Context';

import styles from './styles.module.scss'
const Breadcrumb = () => {
    const { categories } = useGenericContext();
    return(
        <section className={styles.breadCrumbContainer}>
            <div className={styles.breadCrumb}>
                {
                    categories.map((category:string, index:number) => (
                        <div key={`bread-${index}`} className={styles.breadCrumbItem}>{category}</div>
                    ))
                }
            </div>
        </section>
    )
}

export { Breadcrumb }