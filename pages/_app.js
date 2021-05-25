import { ApolloProvider } from '@apollo/react-hooks'
import client from '../utils/apollo'
import GlobalStyles from '../styles/GlobalStyles'

const MyApp = ({ Component, pageProps }) => {
  return (
    <ApolloProvider client={client}>
      <GlobalStyles/>
      <Component {...pageProps} />
    </ApolloProvider>
  )
}

export default MyApp