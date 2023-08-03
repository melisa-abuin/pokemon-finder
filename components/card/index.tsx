import React from 'react'
import {
  Container,
  Divider,
  Header,
  ImageBackground,
  Title,
  TypesSection,
} from './styles'
import { Pokemon } from '@/interfaces/pokemon'
import { TypeImage } from '../type-image'
import Image from 'next/image'
import { Badge } from '../badge'

export const Card = ({
  id,
  image,
  name,
  types,
}: Omit<Pokemon, 'abilities'>) => {
  return (
    <Container>
      <Header>
        <Badge id={id} />
        <Title>{name}</Title>
      </Header>
      <ImageBackground>
        <Image alt={name} height={120} src={image?.front} width={120} />
      </ImageBackground>
      <Divider />
      <TypesSection>
        {types &&
          types.map((type) => <TypeImage key={type.type.name} type={type} />)}
      </TypesSection>
    </Container>
  )
}
