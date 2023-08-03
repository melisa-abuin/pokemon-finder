import { render, screen } from '@testing-library/react'
import { Container } from '..'
import theme from '@/theme'
import { CustomThemeProvider } from '@/context/CustomThemeProvider'

describe('Container', () => {
  it('renders the correct children', () => {
    const mockedText = 'hello!'
    render(
      <CustomThemeProvider activeTheme={theme.light}>
        <Container>{mockedText}</Container>
      </CustomThemeProvider>
    )

    expect(screen.getByText(mockedText)).toBeInTheDocument()
  })
})
