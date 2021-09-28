import { useState, useEffect } from 'react'
import { useRouter } from 'next/router'
import { gql, useQuery } from '@apollo/react-hooks'

// Import components
import General from '../../components/Detail/General/General'

// Import styles
import { Detail } from '../../styles/Pages.styled'

// GraphQL Querys
const GET_WOMAN = gql`
  query getWomanDetail($id: ID!) {
    getWomanDetail(id: $id) {
      _id,
      name,
      age,
      birthday,
      death,
      place,
      eventsDay,
      what,
      who,
      description,
      note,
      records {
        title
      }
    }
  }
`

const DetailPage = () => {
  const router = useRouter()
  const { id } = router.query
  const [woman, setWoman] = useState(null)

  const { data, loading } = useQuery(GET_WOMAN, {
    variables: {
      id
    }
  })

  if (loading) return <p>Cargando...</p>
  return (
    <Detail>
      <General
        woman={data?.getWomanDetail}/>
    </Detail>
  )
}

export default DetailPage
