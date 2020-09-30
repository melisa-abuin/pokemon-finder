import styled from 'styled-components'

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
`
export const Image = styled.img`
  max-width: 170px;
  max-height: 170px;
`
export const Type = styled.div`
  max-width: 170px;
  padding: 20px 0;
  max-height: 170px;
  display: flex;
  align-items: center;
  flex-direction: column;
`
export const TypeImage = styled.img`
  width: 40px;
  height: 40px;
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