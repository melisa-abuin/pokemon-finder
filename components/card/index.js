import React from 'react'
import { Container, Image, ImageBackground, Title, Type, TypesSection, TypeImage } from './styles'

const Card = ({ name, image, types }) => {
  return (
    <Container>
      <ImageBackground>
        <Image src={image && image.front} />
      </ImageBackground>
      <Title>{name}</Title>
      <TypesSection>
        {types && types.map((item, index) => 
          <Type key={index}><TypeImage src={`/${item.type.name}.png`} />{item.type.name}</Type>
        )}
      </TypesSection>
    </Container>
  )
}

export default Card