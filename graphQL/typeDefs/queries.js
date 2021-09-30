import { gql } from 'apollo-boost'

const queries = gql`
  type Query { 
    getWomen: [Woman]
    getWomanDetail(id: ID!): Woman
    
    ### User ###
    getUser(token: String!) : User
  }
`

export default queries