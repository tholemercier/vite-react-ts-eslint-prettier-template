import { extendBaseTheme } from '@chakra-ui/react'
import { ButtonStyleConfig } from './button'
import { colors } from './colors'

export const chakraTheme = extendBaseTheme({
  colors,
  styles: {
    global: () => ({
      'html, body': {
        fontFamily: 'Campton-Light',
        bg: 'dark.600',
        color: 'white',
        minW: '100dvw',
        minH: '100dvh',
        w: '100dvw',
        h: '100dvh',
      },
      '#root': {
        w: '100%',
        h: '100%',
      },
    }),
  },
  components: {
    Button: ButtonStyleConfig,
  },
})
