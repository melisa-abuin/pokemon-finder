import React from 'react'
import { BadgeText, Container } from './styles'

interface Props {
  id: number
}

export const Badge = ({ id }: Props) => {
  return (
    <Container>
      <BadgeText>no. {id}</BadgeText>
    </Container>
  )
}
