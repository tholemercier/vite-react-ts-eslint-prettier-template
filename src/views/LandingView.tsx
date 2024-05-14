import { Button, Flex, Link, Text } from '@chakra-ui/react'
import backgroundImg from '../assets/purple-sparkle-bokeh-background.jpg'
import { TheStarHotel } from '../components/svgs/TheStarLogo'
import { NavLink } from 'react-router-dom'

export const LandingView = () => {
  return (
    <>
      <Flex direction='column' justifyContent='center' alignItems='center' gap='75px'>
        <TheStarHotel />
        <Button width={{ base: '80%', md: '440px' }} letterSpacing='0.8px'>
          <NavLink to='membership-selection'>Get started</NavLink>
        </Button>
        <Flex gap={2} fontSize='18px' flexWrap='wrap' justifyContent='center'>
          <Text>Already have an account?</Text>
          <Link color='primary.500' fontWeight='bold'>
            Login in
          </Link>
        </Flex>
      </Flex>
      <Flex
        display={{ base: 'none', md: 'flex' }}
        backgroundImage={backgroundImg}
        backgroundPosition='center'
        backgroundSize='cover'
      />
    </>
  )
}
