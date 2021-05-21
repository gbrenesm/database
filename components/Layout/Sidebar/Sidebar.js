import { useRouter } from 'next/router'

// Import styles
import { SidebarNav } from './Sidebar.styled'

// Import icons
import HomeIcon from '../../../assets/icons/home.svg'

const Sidebar = () => {
  const router = useRouter()
  const { pathname } = router
  return (
    <SidebarNav>
      <ul>
        <li className={pathname === '/' ? 'active' : ''} ><HomeIcon className="icon"/>Inicio</li>
        <li></li>
      </ul>
    </SidebarNav>
  )
}

export default Sidebar