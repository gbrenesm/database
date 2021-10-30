// Import components
import Title from "../components/Layout/Title/Title"
import WomanForm from '../components/Add/Form/Form'

// import styles
import { Page } from "../styles/Pages.styled"

const AddWoaman = () => {

  return (
    <Page>
      <Title
        title='Añadir nueva mujer'
      />
      <WomanForm/>
    </Page>
  )
}

export default AddWoaman
