import React from 'react'
import { Container, List } from './styles'
import { TypeIcon } from '..'
import PropTypes from 'prop-types'
import { useTranslation } from 'react-i18next'

const multiplier = {
  doubleDamageFrom: 2,
  noDamageFrom: 0,
  halfDamageFrom: 0.5
}

const damageBreakPoint = (point, value) =>  {
  switch(point){
    case 'weak':
      return value > 1
    case 'strong':
      return value < 1 && value > 0
    case 'inmune':
      return value == 0
    default:
      return null
  }
}

const setRelationshipValues = (rel, damageReference) => {
  const multiplierValues = []
  rel && rel.forEach(({ types: { relation } }) => {
    Object.keys(relation).forEach(key => 
      relation && relation[key].forEach(item => {
        multiplierValues.push({multi: multiplier[key], type: item.name })
      }))
  })

  const finalValues = {}
  multiplierValues.forEach(({ type, multi })  => 
    finalValues[type] = finalValues.hasOwnProperty(type) ? finalValues[type] * multi : multi
  )
  return  Object.keys(finalValues).filter(key => 
    damageBreakPoint(damageReference, finalValues[key])).map(name =>
      ({ multi: finalValues[name], type: name })
  )
}

const Details = ({ title, relations, damageReference }) => {
  const { t } = useTranslation('common')
  
  const types = setRelationshipValues(relations, damageReference)
  console.log(types)
  return (
    <Container>
      <label>{t(title)}</label>
      <List>
        {types && types.map((item, index) => 
          <TypeIcon key={index} name={item.type} />
        )}
      </List>
    </Container>
  )
}

Details.propTypes = {
  title: PropTypes.string.isRequired,
  relations: PropTypes.object.isRequired,
  damageReference: PropTypes.string.isRequired
}

export default Details