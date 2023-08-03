import { render, screen } from '@testing-library/react'
import { Badge } from '..'
import mockPokemon from '@/mocks/pokemon'
import { ThemeProvider } from 'styled-components'
import theme from '@/theme'

describe('Badge', () => {
  it('renders the correct pokemon id', () => {
    render(
      <ThemeProvider theme={theme.light}>
        <Badge id={mockPokemon.id} />
      </ThemeProvider>
    )

    expect(screen.getByText(`no. ${mockPokemon.id}`)).toBeInTheDocument()
  })
})
