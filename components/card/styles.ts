import styled, { keyframes } from 'styled-components'

const shine = keyframes`
  from {
    background-position: -250px -250px, center;
  }
  to {
    background-position: 250px 250px, center;
  }
`
export const Badge = styled.div`
  background-color: ${({ theme }) => theme.absoluteColors.secondary};
  border-radius: 3px;
  color: ${({ theme }) => theme.absoluteColors.white};
  font-size: 12px;
  padding: 2px 10px;

  display: flex;
  justify-content: center;
  align-items: center;

  transform: skew(-20deg);
`

export const BadgeText = styled.span`
  transform: skew(20deg);
`

export const Container = styled.div`
  background-color: ${({ theme }) => theme.backgrounds.secondary};
  box-shadow: rgba(0, 0, 0, 0.2) 0px 1px 2px 0px;
  border-radius: 7px;
  margin: 20px;
  padding: 10px;
  position: relative;
  width: 270px;
`

export const Divider = styled.hr`
  border: 1px solid ${({ theme }) => theme.backgrounds.tertiary};
  margin-top: 10px;
  width: 100%;
`

export const Header = styled.div`
  display: flex;
  flex-direction: row;
  gap: 10px;
  padding-bottom: 8px;
`

export const ImageBackground = styled.div`
  align-items: center;
  background-color: ${({ theme }) => theme.colors.rose};
  border-radius: 7px;
  display: flex;
  height: 120px;
  justify-content: center;
  width: 100%;
  background: linear-gradient(
      to top left,
      rgba(255, 255, 255, 0) 0%,
      rgba(255, 255, 255, 0) 45%,
      rgba(255, 255, 255, 0.5) 48%,
      rgba(255, 255, 255, 0.8) 50%,
      rgba(255, 255, 255, 0.5) 52%,
      rgba(255, 255, 255, 0) 57%,
      rgba(255, 255, 255, 0) 100%
    ),
    ${({ theme }) => theme.colors.rose};
  animation: ${shine} 2s forwards;
  background-size: 600px 600px, 100% 100%;
  background-repeat: no-repeat;
  animation-delay: 0.5s;
`

export const Title = styled.h2`
  color: ${({ theme }) => theme.text.primary};
  font-size: 18px;
  font-weight: 500;
  margin: 0;
`
export const TypesSection = styled.div`
  color: ${({ theme }) => theme.text.primary};
  display: flex;
  justify-content: space-around;
`
