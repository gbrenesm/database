import { gql } from '@apollo/react-hooks'

export const ADD_WOMAN = gql`
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
