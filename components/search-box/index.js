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
    onCompleted: data => setPokemon(data.pokemon)
  })


  console.log(pokemon)
  return (
    <div>
      <input name='name' placeholder='type pokemon name' />
      <button onClick={() => getPokemon({ variables: { name: 'pokemon/ditto' } })} >Search</button>
    </div>);
}

export default SearchBox