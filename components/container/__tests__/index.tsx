import { render, screen } from '@testing-library/react'
import { Container } from '..'
import theme from '@/theme'
import { ThemeProvider } from 'styled-components'

describe('Container', () => {
  it('renders the correct children', () => {
    const mockedText = 'hello!'
    render(
      <ThemeProvider theme={theme.light}>
        <Container>{mockedText}</Container>
      </ThemeProvider>
    )

    expect(screen.getByText(mockedText)).toBeInTheDocument()
  })
})
