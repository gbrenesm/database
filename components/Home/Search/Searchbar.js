import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'

// Import styles
import { Searchinput, SearchcContainer } from './Searchbar.styled'

const Searchbar = () => {
  return (
    <SearchcContainer>
    <Searchinput type="text" placeholder="Búsqueda"/>
    <FontAwesomeIcon icon={faSearch} className="icon"/>
    </SearchcContainer>
  )
}

export default Searchbar