import { render, screen } from '@testing-library/react'
import { Container } from '..'

describe('Container', () => {
  it('renders the correct children', () => {
    const mockedText = 'hello!'
    render(<Container>{mockedText}</Container>)

    expect(screen.getByText(mockedText)).toBeInTheDocument()
  })
})
