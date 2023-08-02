import { useState } from 'react'
import { useLazyQuery } from '@apollo/client'
import gql from 'graphql-tag'
import { Pokemon } from '@/interfaces/pokemon'

const GET_POKEMON_INFO_BY_NAME = gql`
  query getPokemon($name: String!) {
    pokemon @rest(type: "Pokemon", path: $name) {
      name
      abilities
      image: sprites {
        front: front_default
      }
      id
      types {
        type
      }
    }
  }
`
export const useApi = () => {
  const [pokemon, setPokemon] = useState<Pokemon | null>(null)
  const [getPokemon, { loading, called }] = useLazyQuery(
    GET_POKEMON_INFO_BY_NAME,
    {
      onCompleted: (data) => setPokemon(data.pokemon),
      fetchPolicy: 'network-only',
    }
  )

  const setData = (name: string) => {
    name && getPokemon({ variables: { name: `pokemon/${name}` } })
  }

  return { pokemon, called, loading, setData }
}
