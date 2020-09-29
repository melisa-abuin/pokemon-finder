import React, { useState } from 'react'
import { useLazyQuery } from '@apollo/client'
import gql from 'graphql-tag'

const GET_POKEMON_INFO_BY_NAME = gql`
  query getPokemon($name: String!) {
    pokemon @rest(type: "Pokemon", path: $name) {
      name
      abilities
      images: sprites {
        front: front_default
      }
    }
  }
`

const SearchBox = () => {

  const [ pokemon, setPokemon ] = useState(null)
  const [ getPokemon, { loading, data } ] = useLazyQuery(GET_POKEMON_INFO_BY_NAME, {
    onCompleted: data => setPokemon(data.pokemon),
    fetchPolicy: 'network-only'
  })

  const handleSubmit = event => {
    event.preventDefault()
    const form = event.target.parentElement
    const name = form.elements.name.value
    name && getPokemon({ variables: { name: `pokemon/${name}` } })
  }

  return (
    <div>
      <form>
        <input name='name' placeholder='type pokemon name' />
        <button type='button' onClick={e => handleSubmit(e)} >Search</button>
      </form><p>{pokemon && pokemon.name}</p>
    </div>
  )
}

export default SearchBox