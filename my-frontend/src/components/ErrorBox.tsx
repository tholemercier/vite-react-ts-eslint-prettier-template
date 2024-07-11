import { Alert, AlertDescription, Text, Box } from '@chakra-ui/react'
import { PropsWithChildren, forwardRef } from 'react'
import { CircledExclamationMarkIcon } from './icons/CircledExclamationMarkIcon'

type ExtProps = PropsWithChildren<{
  errorMessage?: string
}>

export const ErrorBox = forwardRef<HTMLDivElement, ExtProps>(({ errorMessage, children }, ref) => {
  return (
    <Alert
      ref={ref}
      status='error'
      color='primary.red.500'
      background='primary.red.100'
      border='1px solid'
      borderColor='primary.red.300'
      borderRadius='4px'
      mb='15px'
      padding={4}
    >
      <Box width='24px' height='24px' marginRight={4}>
        <CircledExclamationMarkIcon height='100%' width='100%' />
      </Box>
      <AlertDescription flex={1}>
        <Text color='primary.red.500'>{errorMessage ?? children}</Text>
      </AlertDescription>
    </Alert>
  )
})
