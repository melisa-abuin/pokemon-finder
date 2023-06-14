import { render, screen } from '@testing-library/react'
import { TypeImage } from '..'
import mockPokemonType from '@/mocks/type'

describe('TypeImage', () => {
  it('renders the correct type', () => {
    render(<TypeImage type={mockPokemonType} />)

    expect(screen.getByText(mockPokemonType.type.name)).toBeInTheDocument()
  })
})
