import { Card, Content, Image, TypeImage, TypeText } from './styles'

export const Loader = () => (
  <Card role="progressbar" aria-valuetext="Loading..." aria-busy="true">
    <Image />
    <Content>
      <TypeImage />
      <TypeText />
    </Content>
  </Card>
)
