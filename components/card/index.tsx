import React from 'react'
import {
  Container,
  Image,
  ImageBackground,
  Title,
  Type,
  TypesSection,
  TypeImage,
} from './styles'
import { Pokemon } from '@/interfaces/pokemon'

const Card = ({ name, image, types }: Omit<Pokemon, 'abilities'>) => {
  return (
    <Container>
      <ImageBackground>
        <Image alt={name} src={image?.front} />
      </ImageBackground>
      <Title>{name}</Title>
      <TypesSection>
        {types &&
          types.map((item, index) => (
            <Type key={index}>
              <TypeImage src={`/${item.type.name}.png`} />
              {item.type.name}
            </Type>
          ))}
      </TypesSection>
    </Container>
  )
}

export default Card
