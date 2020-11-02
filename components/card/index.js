import React from 'react'
import { Container, Image, ImageBackground, Title, TypesSection } from './styles'
import { TypeIcon } from '..'

const Card = ({ name, image, types }) => {
  return (
    <Container>
      <ImageBackground>
        <Image src={image && image.front} />
      </ImageBackground>
      <Title>{name}</Title>
      <TypesSection>
        {types && types.map((item, index) => 
          <TypeIcon key={index} name={item.type.name} />
        )}
      </TypesSection>
    </Container>
  )
}

export default Card