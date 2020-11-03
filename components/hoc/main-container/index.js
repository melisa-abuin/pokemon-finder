import React from 'react'
import { SearchBox, Card, TypeRelationships } from '../..'
import { Container, Error }  from './styles'
import useApi from './api'
import { useTranslation } from 'react-i18next'

const MainContainer = () => {
  const [ { pokemon, error }, setData ] = useApi(null)
  const { t } = useTranslation('common')

  return (
    <Container>
      <SearchBox setData={setData} />
      { pokemon ? 
        <><Card {...pokemon} /> <TypeRelationships types={pokemon.types} /></> : 
        error && <Error>{t('error.not-found')}</Error> 
      }
    </Container>
  )
}

export default MainContainer