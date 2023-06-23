import styled, { keyframes } from 'styled-components'

const shine = keyframes`
  to {
    background-position-x: -200%;
  }
`

export const Background = styled.div`
  background: #eee;
  background: linear-gradient(110deg, #ececec 8%, #f5f5f5 18%, #ececec 33%);
  border-radius: 5px;
  background-size: 200% 100%;
  animation: 1.5s ${shine} linear infinite;
`

export const Card = styled.div`
  background: #fff;
  border-radius: 5px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.05);
  margin: 10px;
  width: 270px;
`
export const Content = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 20px 30px;
`
export const Image = styled(Background)`
  border-bottom-left-radius: 0;
  border-bottom-right-radius: 0;
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
  height: 170px;
  max-width: 100%;
`
export const TypeImage = styled(Background)`
  border-radius: 50%;
  height: 40px;
  width: 40px;
`
export const TypeText = styled(Background)`
  height: 15px;
  margin-top: 6px;
  width: 40px;
`
