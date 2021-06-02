import { gql } from 'apollo-boost'

const queries = gql`
  type Query { 
    getWoman: Woman
  }
`

export default queries