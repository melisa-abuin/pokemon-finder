import React from 'react'
import { Card, TypeRelationships } from '..'
import { Container, Error, Form, Input, Button } from './styles'
import useApi from './api'
import { useTranslation } from 'react-i18next'

const SearchBox = () => {

  const [ { pokemon, loading, called }, setData ] = useApi(null)
  const { t } = useTranslation('common')

  const handleSubmit = event => {
    event.preventDefault()
    const form = event.target.parentElement
    const name = form.elements.name.value
    const nameToSend = name && name.toLowerCase();
    nameToSend && setData(nameToSend)
  }

  return (
    <Container>
      <Form onSubmit={e => e.preventDefault()} >
        <Input name='name' placeholder={t('search-box.type')} />
        <Button type='button' onClick={e => handleSubmit(e)} >{t('search-box.search')}</Button>
      </Form>
      {pokemon ? <><Card {...pokemon} /></> : 
        called && !loading && <Error>{t('error.not-found')}</Error>}
     
    </Container>
  )
}

export default SearchBox