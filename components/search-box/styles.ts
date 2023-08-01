import styled from 'styled-components'

export const Form = styled.form`
  align-items: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
`
export const Input = styled.input`
  background-color: ${({ theme }) => theme.backgrounds.secondary};
  border-radius: 8px;
  border: none;
  box-shadow: rgba(0, 0, 0, 0.2) 0px 1px 2px 0px;
  box-sizing: border-box;
  color: ${({ theme }) => theme.text.primary};
  font-size: 14px;
  margin: 10px;
  padding: 10px 20px;
  width: 100%;

  & placeholder {
    color: ${({ theme }) => theme.text.secondary};
    opacity: 1;
  }

  & -ms-input-placeholder {
    color: ${({ theme }) => theme.text.secondary};
  }

  & -ms-input-placeholder {
    color: ${({ theme }) => theme.text.secondary};
  }
`
export const Button = styled.button`
  background-color: ${({ theme }) => theme.absoluteColors.primary};
  border-radius: 8px;
  border: none;
  color: ${({ theme }) => theme.absoluteColors.white};
  cursor: pointer;
  font-size: 14px;
  outline: none;
  padding: 10px 20px;
  width: 100%;

  &:hover {
    background-color: ${({ theme }) => theme.absoluteColors.secondary};
  }
`
