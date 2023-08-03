import { Theme } from '@/interfaces/theme'
import React from 'react'
import { ThemeProvider } from 'styled-components'

const ThemeContext = React.createContext<
  [Theme, React.Dispatch<React.SetStateAction<Theme>>] | undefined
>(undefined)

export function CustomThemeProvider({
  children,
  activeTheme,
}: {
  children: React.ReactNode
  activeTheme: Theme
}) {
  const [theme, setTheme] = React.useState(activeTheme)
  return (
    <ThemeContext.Provider value={[theme, setTheme]}>
      <ThemeProvider theme={theme.light}>{children}</ThemeProvider>
    </ThemeContext.Provider>
  )
}

export function useCustomTheme() {
  const context = React.useContext(ThemeContext)
  if (context === undefined) {
    throw new Error('useForecast must be used within a ForecastProvider')
  }
  return context
}
