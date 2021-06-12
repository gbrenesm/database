import { useState } from 'react'

// Import styles
import { Form } from './Form.styled'

const FormComponent = () => {
  const [name, setName] = useState('')
  const [birthday, setBirthday] = useState('')
  const [death, setDeath] = useState('')
  const [date, setDate] = useState('')
  const [age, setAge] = useState(0)
  const [place, setPlace] = useState('')
  const [what, setWhat] = useState('')
  const [who, setWho] = useState('')
  const [description, setDescription] = useState('')
  const [note, setNote] = useState('')

  const handleSubmit = e => {
    e.preventDefault()
    console.log(name)
  }

  return (
    <Form onSubmit={handleSubmit}>
      <div>
        <label>Nombre:</label>
        <input type="text" id="name" name="name" onChange={e => setName(e.target.value)} />
      </div>
      <div className="dates-div">
        <div>
          <label>Fecha de nacimiento: </label>
          <input type="date" id="birthday" name="birthday" onChange={e => setBirthday(e.target.value)} />
        </div>
        <div>
          <label>Fecha de defunción: </label>
          <input type="date" id="death" name="death" onChange={e => setDeath(e.target.value)} />
        </div>
      </div>
      <div className="general-div">
        <div>
          <label>Fecha: </label>
          <input type="date" id="date" name="date" onChange={e => setDate(e.target.value)} />
        </div>
        <div>
          <label>Edad: </label>
          <input type="number" id="age" name="age" onChange={e => setAge(e.target.value)} />
        </div>
        <div>
          <label>Lugar: </label>
          <input type="text" id="place" name="place" onChange={e => setPlace(e.target.value)} />
        </div>
      </div>
      <div className="fact-div">
        <div>
          <label>Suceso: </label>
          <input type="text" id="what" name="what" onChange={e => setWhat(e.target.value)} />
        </div>
        <div>
          <label>Perpetrador: </label>
          <input type="text" id="who" name="who" onChange={e => setWho(e.target.value)} />
        </div>
      </div>
      <div className="textarea-div">
        <label>Descripción: </label>
        <textarea id="description" name="description" onChange={e => setDescription(e.target.value)} />
      </div>
      <div className="textarea-div">
        <label>Nota: </label>
        <textarea id="note" name="note" onChange={e => setNote(e.target.value)} />
      </div>
      <button>Guardar</button>
    </Form>
  )
}

export default FormComponent