import { extendBaseTheme } from '@chakra-ui/react'
import { colors } from './colors'
import { ButtonStyleConfig } from './components/button.chakra'
import { InputStyleConfig, FormLabelStyleConfig, SelectStyleConfig } from './components/form.chakra'

export const chakraTheme = extendBaseTheme({
  colors,
  styles: {
    global: () => ({
      html: {
        height: '100%',
        width: '100%',
        margin: 0,
        padding: 0,
      },
      body: {
        fontFamily: '"Montserrat", sans-serif',
        fontOpticalSizing: 'auto',
        fontStyle: 'normal',
        background: 'primary.dark.900',
        color: 'primary.dark.50',
        height: '100%',
        width: '100%',
      },
      '#root': {
        width: '100%',
        height: '100%',
      },
    }),
  },
  components: {
    Button: ButtonStyleConfig,
    Input: InputStyleConfig,
    FormLabel: FormLabelStyleConfig,
    Select: SelectStyleConfig,
  },
})
