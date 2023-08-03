import styled from 'styled-components'

export const Button = styled.button`
  align-items: center;
  background-color: ${({ theme }) => theme.absoluteColors.transparent};
  border: none;
  color: ${({ theme }) => theme.text.secondary};
  cursor: pointer;
  display: flex;
  flex-direction: row;
  gap: 10px;
`

export const Nav = styled.nav`
  background-color: ${({ theme }) => theme.absoluteColors.transparent};
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  position: absolute;
  width: 100%;
`

export const Ul = styled.ul`
  list-style-type: none;
  margin: 10px 0;
  padding-inline-start: 0;
`
