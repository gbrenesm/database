import { gql } from '@apollo/react-hooks'

const mutations = gql`
  type Mutation {
    ### Women ###
    addWoman(input: WomanInput!) : Woman
  }
`
export default mutations