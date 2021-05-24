// Import styles
import { TableHeadContainer } from './TableHead.styled'

const TableHead = () => {
  return (
    <TableHeadContainer>
      <tr>
        <th>Nombre</th>
        <th>Edad</th>
        <th>Suceso</th>
        <th>Perpetrador</th>
    </tr>
    </TableHeadContainer>
  )
}

export default TableHead