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
  if (!loading) {
    data.getWomen.map(woman => {
      woman.eventsDay = convertDate(new Date(Number(woman.eventsDay)).toISOString().slice(0, 10))
    })
  }
  if (loading) return (<tbody><tr><td>Cargando</td></tr></tbody>)

  return (
    <TableBodyContainer>
      {data.getWomen.map(woman => 
        <tr key={woman._id}>
          <td>{woman.name}</td>
          <td>{woman.eventsDay}</td>
          <td>{woman.place}</td>
          <td>{woman.what}</td>
        </tr>
      )}
    </TableBodyContainer>
  )
}

export default TableBody
