import { gql } from '@apollo/react-hooks'

export const GET_WOMEN = gql`
  query getWomen {
    getWomen {
      _id,
      name,
      age,
      place,
      eventsDay,
      eventsMonth,
      eventsYear,
      crime,
      birthday,
      death,
      note,
      who,
      description,
    }
  }
`
export const GET_WOMAN_DETAILS = gql`
  query getWomanDetail($id: ID!) {
    getWomanDetail(id: $id) {
      _id,
      name,
      age,
      place,
      eventsDay,
      eventsMonth,
      eventsYear,
      crime,
      birthday,
      death,
      note,
      who,
      description,
      records {
        name
      }
    }
  }
`