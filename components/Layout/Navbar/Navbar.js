import Link from 'next/link'

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
        <Link href="/add-woman"><a>Agregar mujer</a></Link>
      </div>
    </Nav>
  )
}

export default Navbar