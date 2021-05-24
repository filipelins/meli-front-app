import { useRouter } from 'next/dist/client/router'
import Head from 'next/head'
import styles from './styles.module.scss'

const Header = (props: any) => {

    const router = useRouter();
    const returnHome = () => router.push('/')
    const tst = 'iphone';


    const search =  ()=> router.push({
        pathname: `/items`,
        query: { search: 'nintendo' },
    })
    
    
    return(
        <>
            <Head>
                <meta name="Description" />
                <title>Mercado Livre</title>
                {/* <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
                <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" /> */}
            </Head>

            <header className={styles.headerContainer}>
                <div className={styles.logoContainer} onClick={()=>{
                    returnHome()
                }}>
                    <img src="/Logo_ML.png" alt="Mercado Livre" />
                </div>
                <div className={styles.searchContainer}>
                    <input placeholder="Nunca dejes de buscar" type="text" />
                    <div className={styles.searchIcon} onClick={search}>
                        <img src="ic_Search.png" alt="search" />
                    </div>
                    
                </div>
            </header>
        </>
    )
}

export { Header }