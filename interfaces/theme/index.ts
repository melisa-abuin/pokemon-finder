export interface Theme {
  absoluteColors: Record<string, string>
  backgrounds: Record<string, string>
  text: Record<string, string>
  fonts: Record<string, string>
  name: string
}

export interface Themes {
  dark: Theme
  light: Theme
}
