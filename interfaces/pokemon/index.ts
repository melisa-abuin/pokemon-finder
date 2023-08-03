import { Type } from '../type'

export interface Pokemon {
  abilities: Ability[]
  name: string
  image: {
    front: string
  }
  id: number
  types: Type[]
}

export interface Ability {
  ability: {
    name: string
    url: string
  }
  is_hidden: boolean
  slot: number
}
