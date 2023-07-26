import React, { ChangeEvent, FormEvent, useState } from 'react'
import { Container, Form, Input, Button } from './styles'
import { useApi } from './api'
import { Results } from '../results'

export const SearchBox = () => {
  const { pokemon, called, loading, setData } = useApi()
  const [pokemonInputValue, setPokemonInputValue] = useState('')

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault()

    if (!pokemonInputValue) {
      return
    }

    setData(pokemonInputValue)
  }

  const handleOnChange = (event: ChangeEvent<HTMLInputElement>) => {
    setPokemonInputValue(event.target.value)
  }

  return (
    <Container>
      <Form>
        <Input
          aria-label="type pokemon name"
          name="name"
          placeholder="type pokemon name"
          onChange={handleOnChange}
          value={pokemonInputValue}
        />
        <Button aria-label="search" type="submit" onClick={handleSubmit}>
          Search
        </Button>
      </Form>
      <Results called={called} loading={loading} pokemon={pokemon} />
    </Container>
  )
}
