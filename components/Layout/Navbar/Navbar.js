import { useRouter } from 'next/router'
import Link from 'next/link'

// Import styles
import { Nav } from './Navbar.styled'

// Import icons
import WomenIcon from '../../../assets/icons/mujer.svg'


const Navbar = () => {
  const router = useRouter()
  const path = router.pathname

  return (
    <Nav>
      <h1>LAS MUJERES INVISIBLES DE MÉXICO</h1>
    </Nav>
  )
}

export default Navbar