// Import components
import Table from '../components/Home/Table/Table'
import Searchbar from '../components/Home/Search/Searchbar'
import Button from '../components/Home/Button/Button'

// Import styles
import { Main } from '../styles/Home.styled'


const Home = () => {
  return (
    <Main>
      <div> 
        <Searchbar/>
        <Button/>
      </div>
      <Table/>
    </Main>
  )
}

export default Home