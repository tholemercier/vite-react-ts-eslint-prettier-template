import { ChakraProvider } from '@chakra-ui/react'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import React from 'react'
import ReactDOM from 'react-dom/client'
import { RouterProvider } from 'react-router-dom'
import { CenteredSpinner } from './components/CenteredSpinner'
import { GeneralContextProvider } from './contexts/GeneralContext'
import { appRouter } from './router'
import { Fonts } from './theme/Fonts'
import { chakraTheme } from './theme/chakra.theme'

const queryClient = new QueryClient()

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <ChakraProvider theme={chakraTheme}>
        <Fonts />
        <GeneralContextProvider>
          <RouterProvider router={appRouter} fallbackElement={<CenteredSpinner />} />
        </GeneralContextProvider>
      </ChakraProvider>
    </QueryClientProvider>
  </React.StrictMode>,
)
