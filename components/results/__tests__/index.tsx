import { render, screen } from '@testing-library/react'
import { Results } from '..'
import mockPokemon from '@/mocks/pokemon'
import { ThemeProvider } from 'styled-components'
import theme from '@/theme'

describe('Results', () => {
  it('does not render any result if there is no data', () => {
    const { container } = render(
      <ThemeProvider theme={theme.light}>
        <Results called={false} loading={false} pokemon={null} />
      </ThemeProvider>
    )

    expect(container.firstChild).toBeNull()
  })

  it('renders a loader if the data is not ready yet', () => {
    render(
      <ThemeProvider theme={theme.light}>
        <Results called={true} loading={true} pokemon={null} />
      </ThemeProvider>
    )

    expect(screen.getByRole('progressbar')).toBeInTheDocument()
  })

  it('renders an error message if the api was called but no pokemon was returned', () => {
    render(
      <ThemeProvider theme={theme.light}>
        <Results called={true} loading={false} pokemon={null} />
      </ThemeProvider>
    )

    expect(screen.getByText('Ups! Pokemon not found')).toBeInTheDocument()
  })

  it('renders the pokemon card if the result is correct', () => {
    render(
      <ThemeProvider theme={theme.light}>
        <Results called={true} loading={false} pokemon={mockPokemon} />
      </ThemeProvider>
    )

    expect(screen.getByText(mockPokemon.name)).toBeInTheDocument()
  })
})
