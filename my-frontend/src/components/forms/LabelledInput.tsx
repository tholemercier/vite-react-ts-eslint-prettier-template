import { FormControl, FormLabel, Input } from '@chakra-ui/react'

type Prim = string | number | readonly string[] | undefined

type ExtProps<T> = {
  value: T
  label: string
}

export const LabelledInput = <T extends Prim>(props: ExtProps<T>) => {
  return (
    <FormControl width='100%' marginBottom='35px' isDisabled>
      <FormLabel textTransform='uppercase' color='primary.dark.100'>
        {props.label}
      </FormLabel>
      <Input value={props.value} type='text' width='100%' color='primary.dark.100' />
    </FormControl>
  )
}
