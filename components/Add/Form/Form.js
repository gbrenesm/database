import { useState } from 'react'
import { useMutation } from '@apollo/react-hooks'
import { useRouter } from 'next/router'

// Import styles
import { Form } from './Form.styled'
import { Title2 } from '../../Layout/Title/Title.styled'

// GraphQL Querys
import { ADD_WOMAN } from '../../../services/mutations'
import { GET_WOMEN } from '../../../services/queries'


const WomanForm = () => {
  const router = useRouter()
  const [ addWoman ] = useMutation(ADD_WOMAN, {
    update(cache, { data: { addWoman } }) {
      const { getWomen } = cache.readQuery({ query: GET_WOMEN })
      cache.writeQuery({
        query: GET_WOMEN,
        data: {
          getWomen: [...getWomen, addWoman]
        }
      })
    }
  })

  const [name, setName] = useState('')
  const [eventsDay, setEventsDay] = useState(0)
  const [eventsMonth, setEventsMonth] = useState(0)
  const [eventsYear, setEventsYear] = useState(0)
  const [age, setAge] = useState(0)
  const [place, setPlace] = useState('')
  const [who, setWho] = useState('')
  const [crime, setCrime] = useState('')
  const [birthday, setBirthday] = useState('')
  const [death, setDeath] = useState('')
  const [note, setNote] = useState('')
  const [description, setDescription] = useState('')

  const submitForm = async (e) => {
    e.preventDefault()

    try {
      const { data } = await addWoman({ 
        variables: {
          input: {
            name,
            eventsDay: Number(eventsDay),
            eventsMonth: Number(eventsMonth),
            eventsYear: Number(eventsYear),
            age: Number(age),
            place,
            who,
            crime,
            birthday,
            death,
            note,
            description
          }
        }
      })
      router.push('/')
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <Form onSubmit={submitForm}>
      <div className="input-container in-line name">
        <label htmlFor="name">Nombre:</label>
        <input type="text" onChange={e => setName(e.target.value)} name="name" id="name"/>
      </div>
      <div className="datos">
        <div>
          <Title2>Datos del crimen</Title2>
          <div className="input-container in-line">
            <label htmlFor="crime">Tipo de crimen:</label>
            <select required defaultValue={""} onChange={e => setCrime(e.target.value)} name="crime" id="crime">
              <option value="" selected>Selecciona una opción</option>
              <option value="feminicidio">Feminicidio</option>
              <option value="intento de feminicidio">Intento de feminicidio</option>
              <option value="violación">Violación</option>
              <option value="agresión">Agresión</option>
              <option value="otro">Otro</option>
            </select>
            {crime === 'otro'?
            <>
            <label htmlFor="type-crime">Indica el crimen</label>
            <input type="text" onChange={e => setCrime(e.target.value)} name="type-crime" id="type-crime"/> 
            </>: <></>}
          </div>
          <div className="input-container in-line">
            <label>Fecha</label>
            <label htmlFor="year">año:</label>
            <input type="number" min="1500" max="2050" onChange={e => setEventsYear(e.target.value)} name="year" id="year"/>
            <label htmlFor="month">mes:</label>
            <input type="number" min="1" max="31" onChange={e => setEventsDay(e.target.value)} name="month" id="month"/>
            <label htmlFor="day">día:</label>
            <input type="number" min="1" max="12" onChange={e => setEventsMonth(e.target.value)} name="day" id="day" />
          </div>
          <div className="input-container in-line">
            <label htmlFor="place">Lugar:</label>
            <input type="text" onChange={e => setPlace(e.target.value)} name="place" id="place" />
          </div>
          <div className="input-container in-line">
            <label htmlFor="who" >Perpetudar:</label>
            <input type="text" onChange={e => setWho(e.target.value)} name="who" id="who" />
          </div>
        </div>
        <div>
        <Title2>Datos generales</Title2>
          <div className="input-container in-line"> 
            <label htmlFor="age" >Edad:</label>
            <input type="number" onChange={e => setAge(e.target.value)} name="age" id="age" />
          </div>
          <div className="input-container in-line">
            <label htmlFor="birthday" >Fecha de nacimiento:</label>
          < input type="date" onChange={e => setBirthday(e.target.value)} name="birthdat" id="birthday" />
          </div>
          <div className="input-container in-line">
            <label htmlFor="death" >Fecha de defunción:</label>
            <input type="date" onChange={e => setDeath(e.target.value)} name="death" id="death" />
          </div>
        </div>
      </div>
      <div>
        <div className="input-container text-area">
          <label htmlFor="description">Descripción:</label>
          <textarea onChange={e => setDescription(e.target.value)} name="description"/>
        </div>
        <div className="input-container text-area">
          <label htmlFor="note">Nota:</label>
          <textarea onChange={e => setNote(e.target.value)} name="note"/>
        </div>
      </div>
      <button type="submit">Añadir mujer</button>
    </Form>
  )
}

export default WomanForm
