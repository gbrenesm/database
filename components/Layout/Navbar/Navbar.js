import { useRouter } from 'next/router'
import Link from 'next/link'
import Head from 'next/head'

// Import styles
import { Nav } from './Navbar.styled'

// Import icons
import WomenIcon from '../../../assets/icons/mujer.svg'


const Navbar = ({ children }) => {
  const router = useRouter()
  const path = router.pathname

  return (
    <>
    <Head>
      <title>Mujeres invisibles | Editor</title>
    </Head>
    <Nav>
      <Link href="/"><a><h1>LAS MUJERES INVISIBLES DE MÉXICO</h1></a></Link>
    </Nav>
    { children }
    </>
  )
}

export default Navbar