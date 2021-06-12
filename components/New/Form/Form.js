// Import styles
import { Form } from './Form.styled'

const FormComponent = () => {
  return (
    <Form>
      <div>
        <label>Nombre:</label>
        <input type="text" id="name" name="name"/>
      </div>
      <div className="dates-div">
        <div>
          <label>Fecha de nacimiento: </label>
          <input type="date" id="birthday" name="birthday"/>
        </div>
        <div>
          <label>Fecha de defunción: </label>
          <input type="date" id="death" name="death"/>
        </div>
      </div>
      <div className="general-div">
        <div>
          <label>Fecha: </label>
          <input type="date" id="date" name="date"/>
        </div>
        <div>
          <label>Edad: </label>
          <input type="number" id="age" name="age"/>
        </div>
        <div>
          <label>Lugar: </label>
          <input type="text" id="place" name="place"/>
        </div>
      </div>
      <div className="fact-div">
        <div>
          <label>Suceso: </label>
          <input type="text" id="what" name="what"/>
        </div>
        <div>
          <label>Perpetrador: </label>
          <input type="text" id="who" name="who"/>
        </div>
      </div>
      <div className="textarea-div">
        <label>Descripción: </label>
        <textarea id="description" name="description"/>
      </div>
      <div className="textarea-div">
        <label>Nota: </label>
        <textarea id="note" name="note"/>
      </div>
      <button>Guardar</button>
    </Form>
  )
}

export default FormComponent