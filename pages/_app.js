import Layout from '../Components/Layout'
import { MovieProvider } from '../Components/MovieContext'
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  return <MovieProvider>
      <Layout>
      <Component {...pageProps} />
    </Layout>
  </MovieProvider>
}

export default MyApp
