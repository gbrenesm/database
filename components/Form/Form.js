// Import styles
import { Form } from './Form.styled'

const FormComponent = () => {
  return (
    <Form>
      <label>Nombre:</label>
      <input type="text" id="name" name="name"/>
      <label>Edad: </label>
      <input type="number" id="age" name="age"/>
      <label>Lugar: </label>
      <input type="text" id="place" name="place"/>
      <label>Suceso: </label>
      <input type="text" id="what" name="what"/>
      <label>Perpetrador: </label>
      <input type="text" id="who" name="who"/>
      <label>Fecha: </label>
      <input type="date" id="date" name="date"/>
      <label>Fecha de nacimiento: </label>
      <input type="date" id="birthday" name="birthday"/>
      <label>Fecha de defunción: </label>
      <input type="date" id="death" name="death"/>
      <label>Descripción: </label>
      <textarea id="description" name="description"/>
    </Form>
  )
}

export default FormComponent