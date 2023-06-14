import { Type } from '@/interfaces/type'
import { Container } from './styles'
import Image from 'next/image'

interface Props {
  type: Type
}

export const TypeImage = ({ type: { type } }: Props) => (
  <Container>
    <Image alt="type" height={40} src={`/${type.name}.png`} width={40} />
    {type.name}
  </Container>
)
