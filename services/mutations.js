import { gql } from '@apollo/react-hooks'

const ADD_WOMAN = gql`
  mutation addWoman($input: WomanInput!) {
    addWoman(input: $input) {
      name,
      place,
      eventsDay,
      eventsMonth,
      eventsYear,
      age,
      crime,
      place,
      who,
      birthday,
      death,
      note,
      description
  }
}
`

module.exports = {
  ADD_WOMAN
}
