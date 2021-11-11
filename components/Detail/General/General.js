// Import styles
import { GeneralInfo } from './General.styled'


const General = ({ woman }) => {
  console.log('Woman', woman? woman : undefined)
  return (
    <GeneralInfo>
      <div>
        <div>
          <h2>DATOS DEL CRIMEN</h2>
          <ul>
            <li><b>Tipo de crimen:</b> {woman?.crime}</li>
            <li><b>Fecha:</b> </li>
            <li><b>Lugar:</b> {woman?.place}</li>
            <li><b>Perpetuador:</b> {woman?.who}</li>
            {woman.note? <li><b>Nota:</b> {woman?.note} </li> : <></> }
          </ul>
        </div>
        <div>
          <h2>DATOS GENERALES</h2>
          <ul>
            <li><b>Edad:</b> {woman?.age > 0 ? woman.age : 'No hay datos'}</li>
            <li><b>Fecha de nacimiento:</b> </li>
            <li><b>Fecha de defunción:</b> </li>
          </ul>
        </div>
      </div>
      <p><b>Descripción:</b> {woman?.description}</p>
    </GeneralInfo>
  )
}

export default General
