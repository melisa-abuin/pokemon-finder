import { Error } from './styles'
import { Card } from '../card'
import { Pokemon } from '@/interfaces/pokemon'
import { Loader } from '../loader'

interface Props {
  pokemon: Pokemon | null
  called: boolean
  loading: boolean
}

export const Results = ({ called, loading, pokemon }: Props) => {
  if (loading) {
    return <Loader />
  }

  if (called && !pokemon) {
    return <Error>Ups! Pokemon not found</Error>
  }

  if (!!pokemon) {
    return <Card {...pokemon!} />
  }

  return null
}
