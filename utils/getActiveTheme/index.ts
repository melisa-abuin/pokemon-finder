import { Theme } from '@/interfaces/theme'
import themes from '../../theme'

export const getActiveTheme = (): Theme => {
  let activeTheme: Theme = themes.light

  if (typeof window === 'undefined') {
    return activeTheme
  }

  const storedTheme = localStorage.getItem('theme')

  if (!storedTheme) {
    return activeTheme
  }

  return JSON.parse(storedTheme)
}
