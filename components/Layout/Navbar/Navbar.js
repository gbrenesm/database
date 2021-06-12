import { useRouter } from 'next/router'
import Link from 'next/link'

// Import styles
import { Nav } from './Navbar.styled'

// Import icons
import WomenIcon from '../../../assets/icons/mujer.svg'


const Navbar = () => {
  const router = useRouter()
  const path = router.pathname
  console.log(path)
  return (
    <Nav>
      <div>
        {/* <WomenIcon className="icon"/> */}
      </div>
      {path !== '/add-woman' &&
      <div>
        <Link href="/add-woman"><a>Agregar mujer</a></Link>
      </div>}
    </Nav>
  )
}

export default Navbar