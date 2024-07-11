import { Box } from '@chakra-ui/react'
import { PropsWithChildren } from 'react'

export const Layout = (props: PropsWithChildren) => {
  return (
    <Box minHeight='100%' width='100%' padding={{ base: 1, md: 2 }}>
      {props.children}
    </Box>
  )
}
