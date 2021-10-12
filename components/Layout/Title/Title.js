// Import styles
import { TitleHeader } from "./Title.styled"

const Title = ({ title }) => {
  return (
    <TitleHeader>
      <h1>{title}</h1>
      <hr/>
    </TitleHeader>
  )
}

export default Title
