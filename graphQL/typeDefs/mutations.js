import { gql } from '@apollo/react-hooks'

const mutations = gql`
  type Mutation {
    ### Women ###
    addWoman(input: WomanInput!) : Woman
    editWoman(id: ID!, input: WomanInput) : Woman
    deleteWoman(id: ID!): String

    ### User ###
    addUser(input: UserInput): String
  }
`
export default mutations