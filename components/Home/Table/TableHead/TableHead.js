import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFilter } from '@fortawesome/free-solid-svg-icons'

// Import styles
import { TableHeadContainer } from './TableHead.styled'

const TableHead = () => {
  return (
    <TableHeadContainer>
      <tr>
        <th>Nombre</th>
        <th>Fecha <FontAwesomeIcon icon={faFilter} className="icon"/></th>
        <th>Lugar <FontAwesomeIcon icon={faFilter} className="icon"/></th>
        <th>Crimen <FontAwesomeIcon icon={faFilter} className="icon"/></th>
      </tr>
    </TableHeadContainer>
  )
}

export default TableHead