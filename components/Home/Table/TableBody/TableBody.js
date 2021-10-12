import Link from 'next/link'
import { useState, useEffect } from 'react'
import { gql, useQuery } from '@apollo/react-hooks'
import { convertDate } from '../../../../utils/convertDate'

// Import styles
import { TableBodyContainer } from './TableBody.styled'

// GraphQL Querys
const GET_WOMEN = gql`
  query getWomen {
    getWomen {
      _id,
      name,
      place,
      eventsDay,
      what
    }
  }
`

const TableBody = () => {
  const { data, loading } = useQuery(GET_WOMEN)
  const [womenData, setWomenData] = useState(null)

  useEffect(() => {
    if (!loading && data.getWomen.length) {
  //     // data.getWomen.map(woman => {
  //     //   const date = new Date(Number(woman.eventsDay))
  //     //   woman.eventsDay = convertDate(date?.toISOString())
  //     // })
      setWomenData(data.getWomen)
    }
  }, [data, loading])
  // if (loading) return (<tbody><tr><td>Cargando</td></tr></tbody>)

  return (
    <TableBodyContainer>
      {womenData?.map(woman => 
        <tr key={woman._id}>
          <td><Link href={`/detalles-mujer/${woman._id}`}><a>{woman.name}</a></Link></td>
          <td>{woman.eventsDay}</td>
          <td>{woman.place}</td>
          <td>{woman.what}</td>
        </tr>
      )}
    </TableBodyContainer>
  )
}

export default TableBody
