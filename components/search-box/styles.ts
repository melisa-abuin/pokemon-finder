import styled from 'styled-components'

export const Form = styled.form`
  align-items: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
`
export const Input = styled.input`
  border-radius: 8px;
  border: 1px solid ${({ theme }) => theme.colors.nobel};
  box-sizing: border-box;
  font-size: 14px;
  margin: 10px;
  padding: 10px 20px;
  width: 100%;
`
export const Button = styled.button`
  background-color: ${({ theme }) => theme.colors.sunset};
  border-radius: 8px;
  border: none;
  color: ${({ theme }) => theme.colors.white};
  cursor: pointer;
  font-size: 14px;
  outline: none;
  padding: 10px 20px;
  width: 100%;

  &:hover {
    background-color: ${({ theme }) => theme.colors.red};
  }
`
