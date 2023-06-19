import Characters from 'pages/characters'
import { Title, Wrapper } from './styles'

export default function HomePage() {
  return (
    <Wrapper>
      <Title>Welcome to Marvel</Title>
      <Characters />
    </Wrapper>
  )
}
