import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFilter } from '@fortawesome/free-solid-svg-icons'

// Import styles
import { TableHeadContainer } from './TableHead.styled'

const TableHead = () => {
  return (
    <TableHeadContainer>
      <tr>
        <th>Nombre</th>
        <th>Fecha&nbsp; <FontAwesomeIcon icon={faFilter} className="icon"/></th>
        <th>Lugar&nbsp; <FontAwesomeIcon icon={faFilter} className="icon"/></th>
        <th>Crimen&nbsp; <FontAwesomeIcon icon={faFilter} className="icon"/></th>
      </tr>
    </TableHeadContainer>
  )
}

export default TableHead