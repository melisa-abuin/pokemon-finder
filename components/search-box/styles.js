import styled from 'styled-components'

export const Container = styled.div`
  z-index: 1;
  position: relative; 
  background-color: red;
  color: ${({ theme }) => theme.colors.white};
  width: 100%;
  max-width: 1300px;
  height: 400px;
`