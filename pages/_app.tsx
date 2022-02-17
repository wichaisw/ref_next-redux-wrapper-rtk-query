import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { wrapper } from '../app/store';
import { Provider } from 'react-redux'

function MyApp({ Component, pageProps }: AppProps) {

  return (
    <Component {...pageProps} />
  )
}

export default wrapper.withRedux(MyApp)
