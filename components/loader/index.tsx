import { Card, Content, Image, TypeImage, Text } from './styles'

export const Loader = () => (
  <Card role="progressbar" aria-valuetext="Loading..." aria-busy="true">
    <Text />
    <Image />
    <Content>
      <TypeImage />
      <Text />
    </Content>
  </Card>
)
