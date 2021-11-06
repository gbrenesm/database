import { gql } from '@apollo/react-hooks'

const GET_WOMEN = gql`
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

module.exports = {
  GET_WOMEN
}
