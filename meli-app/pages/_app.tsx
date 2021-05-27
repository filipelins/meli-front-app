import '../styles/globals.scss'
import type { AppProps } from 'next/app'
import { Header } from '../components/Header'
import { ContextProvider } from '../components/Contexts/Context'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <div>
      <ContextProvider>
        <Header></Header>
        <Component {...pageProps} />
      </ContextProvider>
    </div>
  )
  
}
export default MyApp
