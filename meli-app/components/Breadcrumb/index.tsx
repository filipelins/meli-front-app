import styles from './styles.module.scss'

const Breadcrumb = (props: any) => {

    const categories = ['Mobile', 'Android', 'Sansumg'];

    return(
        <section className={styles.container}>
            <div className={styles.breadCrumb}>
                {
                    categories.map((category: string) => (
                        <div className={styles.breadCrumbItem}>{category}</div>
                    ))
                }
            </div>
        </section>
    )
}

export { Breadcrumb }