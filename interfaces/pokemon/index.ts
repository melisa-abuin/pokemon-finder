export interface Pokemon {
  abilities: Ability[]
  name: string
  image: {
    front: string
  }
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

export interface Type {
  type: {
    name: string
    url: string
  }
}
