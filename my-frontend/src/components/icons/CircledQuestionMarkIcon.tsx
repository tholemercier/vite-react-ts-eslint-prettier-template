import { Box, BoxProps } from '@chakra-ui/react'

export const CircledQuestionMarkIcon = (props: BoxProps) => {
  return (
    <Box
      color='white'
      {...props}
      as='svg'
      width='18'
      height='18'
      viewBox='0 0 18 18'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
    >
      <circle cx='9' cy='9' r='9' fill='var(--chakra-colors-primary-500)' />
      <path
        d='M9.4081 10.5383H8.53344L8.4481 8.91701H9.0881C9.89877 8.91701 10.5068 8.38367 10.5068 7.60501C10.5068 6.84767 9.97344 6.31434 9.1841 6.31434C8.52277 6.31434 7.98944 6.71967 7.88277 7.34901H6.77344C6.90144 6.12234 7.76544 5.33301 9.13077 5.33301C10.5281 5.33301 11.5841 6.25034 11.5841 7.59434C11.5841 8.77834 10.7521 9.57834 9.45077 9.68501L9.4081 10.5383ZM8.94944 12.7783C8.56544 12.7783 8.2561 12.4797 8.2561 12.0957C8.2561 11.7117 8.56544 11.4237 8.94944 11.4237C9.33344 11.4237 9.65344 11.7117 9.65344 12.0957C9.65344 12.4797 9.33344 12.7783 8.94944 12.7783Z'
        fill='white'
      />
    </Box>
  )
}