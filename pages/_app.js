import { ApolloProvider } from '@apollo/react-hooks'
import client from '../utils/apollo'
import GlobalStyles from '../styles/GlobalStyles'
import Layout from '../components/Layout/Navbar/Navbar'

const MyApp = ({ Component, pageProps }) => {
  return (
    <ApolloProvider client={client}>
      <GlobalStyles/>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ApolloProvider>
  )
}

export default MyApp