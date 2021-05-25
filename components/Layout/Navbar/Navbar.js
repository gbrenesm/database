// Import styles
import { Nav } from './Navbar.styled'

// Import icons
import WomenIcon from '../../../assets/icons/mujer.svg'


const Navbar = () => {
  return (
    <Nav>
      <div>
        {/* <WomenIcon className="icon"/> */}
      </div>
      <div>
        <button>Agregar mujer</button>
      </div>
    </Nav>
  )
}

export default Navbar