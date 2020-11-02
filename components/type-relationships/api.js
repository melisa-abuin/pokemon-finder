import { useLazyQuery } from '@apollo/client'
import gql from 'graphql-tag'

const GET_TYPES_RELATIONSHIPS = gql`
  query getTypes($type: String!, $value: String!) {
    types @rest(type: $value, path: $type) {
    relation: damage_relations {
      doubleDamageFrom: double_damage_from { 
        name
      }
      doubleDamageTo: double_damage_to {
        name
      }
      noDamageFrom: no_damage_from {
        name
      }
      noDamageTo: no_damage_to {
        name
      }
    }
  }
}
`

const useApi = () => {
  const [ getTypes, { called, data } ] = useLazyQuery(GET_TYPES_RELATIONSHIPS, {
    fetchPolicy: 'network-only'
  })
  const setData = path => {
    path && getTypes({ variables: { type: `type/${path}`} })

  }
  
  return [ { data, called }, setData ]
}

export default useApi