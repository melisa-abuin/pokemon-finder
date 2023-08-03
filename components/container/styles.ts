import styled from 'styled-components'

export const Title = styled.h1`
  color: ${({ theme }) => theme.text.primary};
  font-size: 18px;
  font-weight: 600;
`

export const MainContainer = styled.section`
  align-items: center;
  background-color: ${({ theme }) => theme.backgrounds.primary};
  display: flex;
  flex-direction: column;
  height: 100vh;
  justify-content: center;
  width: 100%;
`
