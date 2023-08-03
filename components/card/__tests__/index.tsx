import { render, screen } from '@testing-library/react'
import { Card } from '..'
import mockPokemon from '@/mocks/pokemon'
import { CustomThemeProvider } from '@/context/CustomThemeProvider'
import theme from '@/theme'

describe('Card', () => {
  it('renders the correct pokemon name', () => {
    render(
      <CustomThemeProvider activeTheme={theme.light}>
        <Card
          name={mockPokemon.name}
          id={mockPokemon.id}
          image={mockPokemon.image}
          types={mockPokemon.types}
        />
      </CustomThemeProvider>
    )

    expect(screen.getByText(mockPokemon.name)).toBeInTheDocument()
  })

  it('renders alt image', () => {
    render(
      <CustomThemeProvider activeTheme={theme.light}>
        <Card
          name={mockPokemon.name}
          id={mockPokemon.id}
          image={mockPokemon.image}
          types={mockPokemon.types}
        />
      </CustomThemeProvider>
    )

    expect(screen.getByAltText(mockPokemon.name)).toBeInTheDocument()
  })
})
