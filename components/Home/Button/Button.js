import Link from 'next/link'

// Import styles
import { AddButton } from './Button.styled'

const Button = () => {
  return (
    <AddButton>
      <Link href="/anadir-mujer">
        <a> Añadir mujer </a>
      </Link>
    </AddButton>
  )
}

export default Button
