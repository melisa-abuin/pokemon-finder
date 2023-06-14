import { Pokemon } from '@/interfaces/pokemon'

export const mockPokemon: Pokemon = {
  abilities: [
    {
      ability: {
        name: 'blaze',
        url: 'https://pokeapi.co/api/v2/ability/66/',
      },
      is_hidden: false,
      slot: 1,
    },
  ],
  name: 'charizard',
  image: {
    front: 'https://pokeapi.co/media/sprites/charizard.png',
  },
  types: [
    {
      type: {
        name: 'fire',
        url: 'https://pokeapi.co/api/v2/type/10/',
      },
    },
  ],
}

export default mockPokemon
