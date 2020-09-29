import { useQuery } from '@apollo/client'
import gql from 'graphql-tag'
import React from 'react'

const GET_POKEMON_INFO = gql`
query getPokemon {
  pokemon @rest(type: "Pokemon", path: "pokemon/ditto") {
    name
    abilities
  }
}`;



const Test = () => {

  const { data, loading, error } = useQuery(GET_POKEMON_INFO);

  console.log(data);
  return <p> <button > jejeje</button>{data && data.pokemon.name}</p>;
}

export default Test