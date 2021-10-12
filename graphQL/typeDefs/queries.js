import { gql } from 'apollo-boost'

const queries = gql`
  type Query {
    ### Woman ###
    getWomen: [Woman]
    getWomanDetail(id: ID!): Woman
    
    ### User ###
    getUser(token: String!) : User
  }
`

export default queries