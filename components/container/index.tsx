import { PropsWithChildren } from 'react'
import { MainContainer, Title } from './styles'

export const Container = ({ children }: PropsWithChildren) => (
  <MainContainer>
    <header>
      <Title>Find your favorite pokemon</Title>
    </header>
    {children}
  </MainContainer>
)
