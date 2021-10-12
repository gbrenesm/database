// Import components
import Title from "../components/Layout/Title/Title"

// import styles
import { Page } from "../styles/Pages.styled"

const AddWoaman = () => {
  return (
    <Page>
      <Title
        title='Añadir nueva mujer'
      />
      <form>
        <label>Nombre: </label>
      </form>
    </Page>
  )
}

export default AddWoaman
