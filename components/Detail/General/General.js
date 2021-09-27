// Import styles
import { GeneralInfo } from './General.styled'

const General = ({ woman }) => {

  console.log('Woman', woman? woman : undefined)
  return (
    <GeneralInfo>
      <h1>{woman?.name}</h1>
      <hr/>
      <div>
        <div>
          <h2>DATOS DEL CRIMEN</h2>
          <ul>
            <li><b>Tipo de crimen:</b> {woman?.what}</li>
            <li><b>Fecha:</b> </li>
            <li><b>Lugar:</b> {woman?.place}</li>
            <li><b>Perpetuador:</b> {woman?.who}</li>
            <li><b>Descripción:</b> {woman?.description}</li>
            {woman.note? <li><b>Nota:</b> {woman?.note} </li> : <></> }
          </ul>
        </div>
        <div>
          <h2>DATOS GENERALES</h2>
          <ul>
            <li><b>Edad:</b> {woman?.age}</li>
            <li><b>Fecha de nacimiento:</b> </li>
            <li><b>Fecha de defunción:</b> </li>
          </ul>
        </div>
      </div>
    </GeneralInfo>
  )
}

export default General
