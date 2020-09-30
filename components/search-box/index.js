import React from 'react'
import Card from '../card'
import { Container, Error, Form, Input, Button } from './styles'
import useApi from './api'

const SearchBox = () => {

  const [ { pokemon, called }, setData ] = useApi(null)

  const handleSubmit = event => {
    event.preventDefault()
    const form = event.target.parentElement
    const name = form.elements.name.value
    const nameToSend = name && name.toLowerCase();
    nameToSend && setData(nameToSend)
  }

  return (
    <Container>
      <Form onSubmit={e => e.preventDefault()} >
        <Input name='name' placeholder='type pokemon name' />
        <Button type='button' onClick={e => handleSubmit(e)} >Search</Button>
      </Form>
      {pokemon ? <Card {...pokemon} /> : called && <Error>Ups! Pokemon not found</Error>}
    </Container>
  )
}

export default SearchBox