import { render, screen } from '@testing-library/react'
import { Card } from '..'
import mockPokemon from '@/mocks/pokemon'
import { ThemeProvider } from 'styled-components'
import theme from '@/theme'

describe('Card', () => {
  it('renders the correct pokemon name', () => {
    render(
      <ThemeProvider theme={theme}>
        <Card
          name={mockPokemon.name}
          image={mockPokemon.image}
          types={mockPokemon.types}
        />
      </ThemeProvider>
    )

    expect(screen.getByText(mockPokemon.name)).toBeInTheDocument()
  })

  it('renders alt image', () => {
    render(
      <ThemeProvider theme={theme}>
        <Card
          name={mockPokemon.name}
          image={mockPokemon.image}
          types={mockPokemon.types}
        />
      </ThemeProvider>
    )

    expect(screen.getByAltText(mockPokemon.name)).toBeInTheDocument()
  })
})
