import styled, { keyframes } from 'styled-components'

const shine = keyframes`
  from {
    background-position: -250px -250px, center;
  }
  to {
    background-position: 250px 250px, center;
  }
`

export const Container = styled.div`
  background-color: ${({ theme }) => theme.colors.mercury};
  box-shadow: 6px 7px 20px 5px rgba(128, 128, 128, 0.49);
  margin: 20px;
  position: relative;
  width: 270px;
`
export const ImageBackground = styled.div`
  align-items: center;
  background-color: ${({ theme }) => theme.colors.rose};
  display: flex;
  height: 170px;
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
export const Image = styled.img`
  max-height: 170px;
  max-width: 170px;
`
export const Title = styled.div`
  background-color: rgba(255, 255, 255, 0.3);
  color: ${({ theme }) => theme.colors.white};
  left: 12px;
  margin: 0;
  padding: 6px 16px;
  position: absolute;
  top: 0;
`
export const TypesSection = styled.div`
  display: flex;
  justify-content: space-around;
`
