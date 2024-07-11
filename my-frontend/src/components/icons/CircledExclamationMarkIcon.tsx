import { Box, BoxProps } from '@chakra-ui/react'

export const CircledExclamationMarkIcon = (props: BoxProps) => {
  return (
    <Box
      color='white'
      {...props}
      as='svg'
      width='100'
      height='100'
      viewBox='0 0 100 100'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
    >
      <circle cx='50' cy='50' r='47.5' stroke='inherit' strokeWidth='5' />
      <path
        d='M49.457 56.2654V25'
        stroke='inherit'
        strokeWidth='5'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
      <path
        fill-rule='evenodd'
        clip-rule='evenodd'
        d='M51.69 71.8983C51.69 73.131 50.6893 74.1315 49.4563 74.1315C48.2233 74.1315 47.2227 73.131 47.2227 71.8983C47.2227 70.6655 48.2233 69.665 49.4563 69.665C50.6893 69.665 51.69 70.6655 51.69 71.8983Z'
        stroke='inherit'
        strokeWidth='5'
        strokeLinejoin='round'
      />
    </Box>
  )
}
