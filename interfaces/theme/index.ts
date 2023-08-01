export interface Theme {
  colors: Record<string, string>
  fonts: Record<string, string>
  name: string
}

export interface Themes {
  dark: Theme
  light: Theme
}
