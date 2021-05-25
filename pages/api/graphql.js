import { ApolloServer } from 'apollo-server-micro'

import mongoConnect from '../../utils/mongoConnect'
import typeDefs from '../../graphQL/typeDefs'
import resolvers from '../../graphQL/resolvers'

const server = new ApolloServer({
  typeDefs,
  resolvers,
})

const handler = mongoConnect(server.createHandler({ path: '/api/graphql' }))

export const config = {
  api: {
    bodyParser: false,
  }
}

export default handler