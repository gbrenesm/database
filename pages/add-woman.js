// Import components
import Navbar from '../components/Layout/Navbar/Navbar'
import FormComponent from '../components/New/Form/Form'

// Import styles
import { NewPage } from '../components/New/Page/NewPage.styled'

const New = () => {
  return (
    <>
      <Navbar/>
      <NewPage>
        <h1>Añadir nueva mujer</h1>
        <FormComponent/>
      </NewPage>
    </>
  )
}

export default New