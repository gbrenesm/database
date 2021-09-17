// Import components
import TableHead from './TableHead/TableHead'
import TableBody from './TableBody/TableBody'

// Import styles
import { Table } from './Table.styled'

const TableComponent = () => {
  return (
    <Table>
      <TableHead/>
      <TableBody/>
    </Table>
  )
}

export default TableComponent
