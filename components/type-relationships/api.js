import { useState } from 'react'
import { useLazyQuery } from '@apollo/client'
import gql from 'graphql-tag'

const GET_TYPES_RELATIONSHIPS = gql`
  query getTypes($type: String!) {
    types @rest(type: "Types", path: $type) {
    relation: damage_relations {
      weakness: double_damage_from { 
        name
      }
      strength: double_damage_to {
        name
      }
      no_damage_from {
        name
      }
      no_damage_to {
        name
      }
    }
  }
}
`

const useApi = () => {

  const [ type, setType ] = useState(null)
  const [ getTypes, { loading, data, called } ] = useLazyQuery(GET_TYPES_RELATIONSHIPS, {
    onCompleted: data => setType(data),
    fetchPolicy: 'network-only'
  })

  const setData = type => {
    console.log(type)
    type && getTypes({ variables: { type: `type/${type}` } })
  }

  return [ { type, called }, setData ]
}

export default useApi