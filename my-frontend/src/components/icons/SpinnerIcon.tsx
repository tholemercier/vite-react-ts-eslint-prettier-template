import { AbsoluteCenter, Spinner } from '@chakra-ui/react'

export const SpinnerIcon = ({ absoluteCenter }: { absoluteCenter?: boolean }) =>
  absoluteCenter ? (
    <AbsoluteCenter axis='both'>
      <Spinner boxSize={7} thickness='3px' speed='0.65s' emptyColor='gray.800' color='white' />
    </AbsoluteCenter>
  ) : (
    <Spinner boxSize={7} thickness='3px' speed='0.65s' emptyColor='gray.800' color='white' />
  )
