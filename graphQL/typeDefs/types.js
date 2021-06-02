import { gql } from 'apollo-boost'

const types = gql`
  type Woman {
    name: String
    age: Int
    birthday: String
    death: String
    note: String
    events: String
    place: String
    who: String
  }
`

export default types