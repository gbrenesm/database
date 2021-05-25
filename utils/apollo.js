import ApolloClient, { InMemoryCache } from 'apollo-boost'

const client = new ApolloClient({
  cache: new InMemoryCache(),
  uri: "http://localhost:3000/api/graphql"
})

export default client