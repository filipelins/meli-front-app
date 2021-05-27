import { useRouter } from 'next/dist/client/router'
import Head from 'next/head'
import { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import styles from './styles.module.scss'
import 'react-toastify/dist/ReactToastify.css';
import { useGenericContext } from '../Contexts/Context';

const Header = (props: any) => {

    const router = useRouter();
    const [query, setQuery] = useState('');
    const { showLoader } = useGenericContext();
    const returnHome = () => router.push('/');

    const search =  ()=> {
        if(query.length > 0) {

            showLoader();
            router.push({ 
                pathname: `/items`,
                query: { search: query },
            });
            return;
        }
        toast("Preencha o campo de busca.");
    }

    return(
        <>
            <Head>
                <title>Mercado Livre</title>
            </Head>
            <header className={styles.headerContainer}>
                <div className={styles.container}>
                    <div className={styles.searchBar}>
                        <div data-cy="home-button-action" onClick={returnHome} className={styles.logo}>
                            <img src="/Logo_ML.png" alt="Mercado Livre" />
                        </div>
                        <div className={styles.search} onKeyUp={(e)=>  e.code == 'Enter' && search() }>    
                            <input value={query} 
                                placeholder="Nunca dejes de buscar" 
                                type="text" 
                                name="search"
                                data-cy="search-input"
                                onChange={(e)=> { setQuery(e.target.value) }}/>
                            <div data-cy="search-button-action" className={styles.searchIcon} onClick={search}>
                                <img src="ic_Search.png" alt="search" />
                            </div>
                        </div>

                    </div>
                </div>
            </header>
            <ToastContainer position="bottom-right" autoClose={2000}/>
        </>
    )
}

export { Header }