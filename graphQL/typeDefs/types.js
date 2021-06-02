import { gql } from 'apollo-boost'

const types = gql`
  type Woman {
    _id: ID
    name: String
    age: Int
    birthday: String
    death: String
    note: String
    events: String
    place: String
    who: String
    what: String
    description: String
    records: [Record]
  }

  type Record {
    title: String
    newspaper: String
    publication: String
    page: String
    place: String
    transcription: String
    file: String,
    url: String
  }
`

export default types