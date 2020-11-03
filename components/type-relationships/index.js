import React, { useCallback, useState, useEffect } from 'react'
import useApi from './api'
import { Button, Container } from './styles'
import { Details } from '..'
import { useTranslation } from 'react-i18next'
import PropTypes from 'prop-types'

const TypeRelationships = ({ types }) => {
  const [ { data }, setData ] = useApi(null)
  const [ relations, setRelations ] = useState("")
  const { t } = useTranslation('common')

  const handleClick = useCallback( async types => {
    types[0] && await setData(types[0].type.name)
    types[1] && await setData(types[1].type.name)
  })

  useEffect(() => {
    data && setRelations(relations => [...relations, data]);
  }, [ data ]);

  return (
    <Container>
      <Button onClick={() => handleClick(types)}>{t('relations.show-items')}</Button>
      {relations && <Container>
        <Details title="relations.show-weakness" relations={relations} damageReference="doubleDamageFrom" />
        <Details title="relations.show-strengths" relations={relations} />
      </Container>}
    </Container>
  )
}

TypeRelationships.propTypes = {
  types: PropTypes.array.isRequired
}

export default TypeRelationships