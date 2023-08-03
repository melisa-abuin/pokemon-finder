import { render, screen } from '@testing-library/react'
import { Badge } from '..'
import mockPokemon from '@/mocks/pokemon'
import theme from '@/theme'
import { CustomThemeProvider } from '@/context/CustomThemeProvider'

describe('Badge', () => {
  it('renders the correct pokemon id', () => {
    render(
      <CustomThemeProvider activeTheme={theme.light}>
        <Badge id={mockPokemon.id} />
      </CustomThemeProvider>
    )

    expect(screen.getByText(`no. ${mockPokemon.id}`)).toBeInTheDocument()
  })
})
