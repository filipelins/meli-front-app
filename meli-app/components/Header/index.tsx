import styles from './styles.module.scss'

const Header = (props: any) => {
    return(
        <header className={styles.headerContainer}>
            <div className={styles.logoContainer}>
                <img src="/Logo_ML.png" alt="Mercado Livre" />
            </div>
            <div className={styles.searchContainer}>
                <input placeholder="Nunca dejes de buscar" type="text" />
                
                <div className={styles.searchIcon}>
                    <img src="ic_Search.png" alt="search" />
                </div>
                
            </div>
        </header>
    )
}

export { Header }