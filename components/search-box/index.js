import React, { useState } from 'react'
import { useLazyQuery } from '@apollo/client'
import gql from 'graphql-tag'
import Card from '../card'
import { Container, Error, Form, Input, Button } from './styles'

const GET_POKEMON_INFO_BY_NAME = gql`
  query getPokemon($name: String!) {
    pokemon @rest(type: "Pokemon", path: $name) {
      name
      abilities
      image: sprites {
        front: front_default
      }
      types {
        type
      }
    }
  }
`

const SearchBox = () => {

  const [ pokemon, setPokemon ] = useState(null)
  const [ getPokemon, { loading, data, called } ] = useLazyQuery(GET_POKEMON_INFO_BY_NAME, {
    onCompleted: data => setPokemon(data.pokemon),
    fetchPolicy: 'network-only'
  })

  const handleSubmit = event => {
    event.preventDefault()
    const form = event.target.parentElement
    const name = form.elements.name.value
    const nameToSend = name && name.toLowerCase();
    nameToSend && getPokemon({ variables: { name: `pokemon/${nameToSend}` } })
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