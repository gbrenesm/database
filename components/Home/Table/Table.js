// Import query
import { useQuery } from '@apollo/react-hooks'
import { GET_WOMEN } from '../../../services/queries'

// Import components
import TableHead from './TableHead/TableHead'
import TableBody from './TableBody/TableBody'

// Import styles
import { Table } from './Table.styled'

const TableComponent = () => {
  const { data, loading } = useQuery(GET_WOMEN)
  
  if (loading) return (<p>Cargando...</p>)
  return (
    <Table>
      <TableHead/>
      <TableBody
        data={data}
        loading={loading}
      />
    </Table>
  )
}

export default TableComponent
