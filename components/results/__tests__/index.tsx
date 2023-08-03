import { render, screen } from '@testing-library/react'
import { Results } from '..'
import mockPokemon from '@/mocks/pokemon'
import { CustomThemeProvider } from '@/context/CustomThemeProvider'
import theme from '@/theme'

describe('Results', () => {
  it('does not render any result if there is no data', () => {
    const { container } = render(
      <CustomThemeProvider activeTheme={theme.light}>
        <Results called={false} loading={false} pokemon={null} />
      </CustomThemeProvider>
    )

    expect(container.firstChild).toBeNull()
  })

  it('renders a loader if the data is not ready yet', () => {
    render(
      <CustomThemeProvider activeTheme={theme.light}>
        <Results called={true} loading={true} pokemon={null} />
      </CustomThemeProvider>
    )

    expect(screen.getByRole('progressbar')).toBeInTheDocument()
  })

  it('renders an error message if the api was called but no pokemon was returned', () => {
    render(
      <CustomThemeProvider activeTheme={theme.light}>
        <Results called={true} loading={false} pokemon={null} />
      </CustomThemeProvider>
    )

    expect(screen.getByText('Ups! Pokemon not found')).toBeInTheDocument()
  })

  it('renders the pokemon card if the result is correct', () => {
    render(
      <CustomThemeProvider activeTheme={theme.light}>
        <Results called={true} loading={false} pokemon={mockPokemon} />
      </CustomThemeProvider>
    )

    expect(screen.getByText(mockPokemon.name)).toBeInTheDocument()
  })
})
