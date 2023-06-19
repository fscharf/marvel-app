import 'styled-components'

declare module 'styled-components' {
  export interface DefaultTheme {
    colors: {
      dark: string
      light: string
      primary: string
      lightSecondary: string
      darkSecondary: string
    }
  }
}
