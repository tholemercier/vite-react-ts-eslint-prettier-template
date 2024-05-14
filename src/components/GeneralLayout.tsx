import { Grid } from '@chakra-ui/react'
import { PropsWithChildren } from 'react'
import styles from './GeneralLayout.module.scss'

export const GeneralLayout = (props: PropsWithChildren) => {
  return (
    <Grid
      gridTemplateColumns={{ base: '1fr', md: '1fr 1fr' }}
      gridTemplateRows='1fr'
      h='100%'
      className={styles['general-layout']}
    >
      {props.children}
    </Grid>
  )
}
