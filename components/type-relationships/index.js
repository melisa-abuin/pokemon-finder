import React from 'react'
import useApi from './api'

const TypeRelationships = ({ types }) => {
  const [ { type, called }, setData ] = useApi(null)

  const handleClick = types => {
    setData(types[0].type.name)
  }
  return (
    <button onClick={() => handleClick(types)}>show strengths and weakness</button>
  )
}

export default TypeRelationships