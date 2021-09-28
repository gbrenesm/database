import { gql } from 'apollo-boost'

const queries = gql`
  type Query { 
    getWomen: [Woman]
    getWomanDetail(id: ID!): Woman
    
  }
`

export default queries