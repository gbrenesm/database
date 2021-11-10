import Link from 'next/link'
import { useState, useEffect } from 'react'
import { convertMonth } from '../../../../utils/convertDate'

// Import styles
import { TableBodyContainer } from './TableBody.styled'

const TableBody = ({ data, loading }) => {
  const [womenData, setWomenData] = useState(null)

  useEffect(() => {
    if (!loading && data.getWomen.length) {
      const womanConvertDate = data.getWomen.map(e => {
        e.eventsMonth = convertMonth(e.eventsMonth)
        console.log(e)
        return e
      })
      setWomenData(womanConvertDate)
    }
  }, [data, loading])


  return (
    <TableBodyContainer>
      {womenData?.map(woman =>
        <tr key={woman._id}>
          <td><Link href={`/detalles-mujer/${woman._id}`}><a>{woman.name}</a></Link></td>
          <td>{woman.eventsDay > 0? `${woman.eventsDay} de` : ''} {woman.eventsMonth} de {woman.eventsYear}</td>
          <td>{woman.place}</td>
          <td>{woman.crime} </td>
        </tr>
      )}
    </TableBodyContainer>
  )
}

export default TableBody
