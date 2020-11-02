import React from 'react'
import { Type, Icon } from './styles'

const TypeIcon = ({ name }) => {
  return (
    <Type>
      <Icon src={`/${name}.png`} />
      {name}
    </Type>
  )
}

export default TypeIcon