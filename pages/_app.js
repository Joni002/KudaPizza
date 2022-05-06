import '../styles/globals.css'
import { ChakraProvider } from '@chakra-ui/react'
import { Provider } from 'react-redux';
import Layout from '../components/layouts/main'
import store from '../redux/store'

function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider>
      <Provider store={store}>
        <Layout>
          <Component {...pageProps}/>
        </Layout>
      </Provider>
    </ChakraProvider>
  )
}

export default MyApp