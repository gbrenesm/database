import { gql } from 'apollo-boost'

const queries = gql`
  type Query { 
    getWomen: [Woman]
  }
`

export default queries