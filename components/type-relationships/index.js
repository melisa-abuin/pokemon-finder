import React, { useCallback, useState, useEffect } from 'react'
import useApi from './api'
import { Button, Container, TypeList } from './styles'
import { TypeIcon } from '..'
import { useTranslation } from 'react-i18next'

const TypeRelationships = ({ types }) => {
  const [ { data }, setData ] = useApi(null)
  const [ relations, setRelations ] = useState("")
  const { t } = useTranslation('common')

  const handleClick = useCallback( async types => {
    await setData(types[0].type.name)
    await setData(types[1].type.name)
  })

  useEffect(() => {
    data && setRelations(relations => [...relations, data]);
  }, [ data ]);

  console.log(relations)
  return (
    <Container>
      <Button onClick={() => handleClick(types)}>{t('relations.show-items')}</Button>
      {data && <Container>
        <label>{t('relations.show-weakness')}</label>
        <TypeList>
          {relations && relations[0].types.relation.doubleDamageFrom.map((item, index) => 
            <TypeIcon key={index} name={item.name} />
          )}
        </TypeList>
        <label>{t('relations.show-strengths')}</label>
        <TypeList>
          {relations && relations[0].types.relation.doubleDamageTo.map((item, index) => 
            <TypeIcon key={index} name={item.name} />
          )}
        </TypeList>
      </Container>}
    </Container>
  )
}

export default TypeRelationships