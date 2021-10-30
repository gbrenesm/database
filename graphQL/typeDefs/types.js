import { gql } from 'apollo-boost'

const types = gql`
  type Woman {
    _id: ID!
    name: String
    age: Int
    birthday: String
    death: String
    note: String
    eventsYear: Int
    eventsMonth: Int
    eventsDay: Int
    place: String
    who: String
    crime: String
    description: String
    records: [Record]
  }

  type Record {
    _id: ID!
    title: String
    newspaper: String
    publication: String
    page: String
    place: String
    transcription: String
    file: String,
    url: String
  }

  type User {
    _id: ID!
    name: String
    email: String
  }

  type Token {
    token: String
  }

  input WomanInput {
    name: String!
    age: Int
    birthday: String
    death: String
    eventsYear: Int
    eventsMonth: Int
    eventsDay: Int
    place: String
    who: String
    crime: String!
    description: String
    note: String
  }

  input UserInput {
    name: String
    email: String!
    password: String!
  }
`

export default types