import { ChakraBaseProvider } from '@chakra-ui/react'
import React from 'react'
import ReactDOM from 'react-dom/client'
import { Layout } from './components/Layout/index.tsx'
import { chakraTheme } from './theme/chakra.theme.ts'
import './theme/global.scss'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ChakraBaseProvider theme={chakraTheme}>
      <Layout></Layout>
    </ChakraBaseProvider>
  </React.StrictMode>,
)
