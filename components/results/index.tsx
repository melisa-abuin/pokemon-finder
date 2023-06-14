import { Error } from './styles'
import { Card } from '../card'
import { Pokemon } from '@/interfaces/pokemon'

interface Props {
  pokemon: Pokemon | null
  called: boolean
  loading: boolean
}

export const Results = ({ called, loading, pokemon }: Props) => {
  if (loading) {
    return <div>loading</div>
  }

  if (called && !pokemon) {
    return <Error>Ups! Pokemon not found</Error>
  }

  if (!!pokemon) {
    return <Card {...pokemon!} />
  }

  return null
}
