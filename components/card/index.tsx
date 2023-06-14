import React from 'react'
import {
  Container,
  Image,
  ImageBackground,
  Title,
  TypesSection,
} from './styles'
import { Pokemon } from '@/interfaces/pokemon'
import { TypeImage } from '../type-image'

export const Card = ({ name, image, types }: Omit<Pokemon, 'abilities'>) => {
  return (
    <Container>
      <ImageBackground>
        <Image alt={name} src={image?.front} />
      </ImageBackground>
      <Title>{name}</Title>
      <TypesSection>
        {types &&
          types.map((type) => <TypeImage key={type.type.name} type={type} />)}
      </TypesSection>
    </Container>
  )
}
