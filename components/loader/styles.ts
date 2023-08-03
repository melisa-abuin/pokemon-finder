import styled, { keyframes } from 'styled-components'

const shine = keyframes`
  to {
    background-position-x: -200%;
  }
`

export const Background = styled.div`
  background: #eee;
  background: linear-gradient(
    110deg,
    ${({ theme }) => theme.backgrounds.primary} 8%,
    ${({ theme }) => theme.backgrounds.tertiary} 18%,
    ${({ theme }) => theme.backgrounds.primary} 33%
  );
  border-radius: 5px;
  background-size: 200% 100%;
  animation: 1.5s ${shine} linear infinite;
`

export const Card = styled.div`
  background-color: ${({ theme }) => theme.backgrounds.secondary};
  border-radius: 7px;
  box-shadow: rgba(0, 0, 0, 0.2) 0px 1px 2px 0px;
  margin: 20px;
  padding: 10px;
  position: relative;
  width: 270px;
`
export const Content = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 40px 30px 20px 30px;
`
export const Image = styled(Background)`
  border-radius: 7px;
  height: 120px;
  max-width: 100%;
`
export const TypeImage = styled(Background)`
  border-radius: 50%;
  height: 40px;
  width: 40px;
`
export const Text = styled(Background)`
  height: 15px;
  margin: 5px 0;
  width: 40px;
`
