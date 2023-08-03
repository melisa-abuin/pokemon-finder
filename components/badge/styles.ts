import styled from 'styled-components'

export const BadgeText = styled.span`
  transform: skew(20deg);
`

export const Container = styled.div`
  align-items: center;
  background-color: ${({ theme }) => theme.absoluteColors.secondary};
  border-radius: 3px;
  color: ${({ theme }) => theme.absoluteColors.white};
  display: flex;
  font-size: 12px;
  justify-content: center;
  padding: 2px 10px;
  transform: skew(-20deg);
`
