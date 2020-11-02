import styled, { keyframes } from 'styled-components'

const shine = keyframes`
  from {
    background-position: -250px -250px, center;
  }
  to {
    background-position: 250px 250px, center;
  }
`;

export const Container = styled.div`
  background-color: ${({ theme }) => theme.colors.mercury};
  position: relative;
  margin: 20px;
  width: 270px;
  box-shadow: 6px 7px 20px 5px rgba(128,128,128,0.49);
`
export const ImageBackground = styled.div`
  background-color: ${({ theme }) => theme.colors.rose};
  width: 100%;
  height: 170px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: linear-gradient(
      to top left, 
      rgba(255, 255, 255, 0.0) 0%,
      rgba(255, 255, 255, 0.0) 45%,
      rgba(255, 255, 255, 0.5) 48%,
      rgba(255, 255, 255, 0.8) 50%,
      rgba(255, 255, 255, 0.5) 52%,
      rgba(255, 255, 255, 0.0) 57%,
      rgba(255, 255, 255, 0.0) 100%
    ), ${({ theme }) => theme.colors.rose};
  animation: ${shine} 2s forwards;
  background-size: 600px 600px, 100% 100%;
  background-repeat: no-repeat;
  animation-delay: 0.5s;
`
export const Image = styled.img`
  max-width: 170px;
  max-height: 170px;
`
export const Title = styled.div`
  position: absolute;
  top: 0;
  left: 12px;
  margin: 0;
  color: ${({ theme }) => theme.colors.white};
  background-color: rgba(255,255,255,0.3);
  padding: 6px 16px;
`
export const TypesSection = styled.div`
  display: flex;
  justify-content: space-around;
`