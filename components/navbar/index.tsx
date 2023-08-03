import { pokedexNumber, pokemonSpritesUrl, themesNames } from '@/constants'
import { Button, Nav, Ul } from './styles'
import { useCustomTheme } from '@/context/CustomThemeProvider'
import themes from '@/theme'
import { useCallback } from 'react'
import Image from 'next/image'

export const Navbar = () => {
  const [theme, setTheme] = useCustomTheme()

  const handleSwitchTheme = useCallback(() => {
    const newTheme =
      theme.name === themesNames.light ? themes.dark : themes.light

    setTheme(newTheme)
    localStorage.setItem('theme', JSON.stringify(newTheme))
  }, [theme.name, setTheme])

  const getPokemonThemeImage = () => {
    let pokemonThemeNumber = pokedexNumber.lunala

    if (theme.name === themesNames.light) {
      pokemonThemeNumber = pokedexNumber.solgaleo
    }

    return `${pokemonSpritesUrl}/${pokemonThemeNumber}.png`
  }

  return (
    <Nav>
      <Ul>
        <li>
          <Button onClick={handleSwitchTheme}>
            Switch theme
            <Image
              alt="change theme"
              height={40}
              src={getPokemonThemeImage()}
              width={40}
            />
          </Button>
        </li>
      </Ul>
    </Nav>
  )
}
