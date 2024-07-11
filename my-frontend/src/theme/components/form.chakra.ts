import { createMultiStyleConfigHelpers, defineStyleConfig } from '@chakra-ui/react'

const inputConfigHelper = createMultiStyleConfigHelpers(['field'])

const baseStyleInputStyleConfig = inputConfigHelper.definePartsStyle({
  field: {
    border: '1px solid',
    borderRadius: '2px',
    borderColor: 'primary.dark.700',
    background: 'primary.dark.800!',
    padding: '16px',
    fontsize: '16px',
    lineHeight: '18.62px',
    maxWidth: '376px',
    _focus: {
      borderColor: 'primary.dark.600',
      outline: 'none',
    },
    _focusVisible: {
      borderColor: 'primary.dark.600',
      outline: 'none',
    },
    _active: {
      borderColor: 'primary.dark.600',
      outline: 'none',
    },
    _disabled: {
      color: 'gray.50',
    },
  },
})

export const InputStyleConfig = inputConfigHelper.defineMultiStyleConfig({
  baseStyle: baseStyleInputStyleConfig,
})

export const FormLabelStyleConfig = defineStyleConfig({
  baseStyle: {
    fontSize: '16px',
    lineHeight: '18.62px',
    marginBottom: '8px',
    display: 'flex',
    gap: 1,
  },
})

const selectConfigHelper = createMultiStyleConfigHelpers(['field', 'icon'])

const baseStylSelectStyleConfig = selectConfigHelper.definePartsStyle({
  field: {
    border: '1px solid',
    borderRadius: '2px',
    borderColor: 'primary.dark.700',
    background: 'primary.dark.800',
    padding: '16px',
    paddingRight: '28px',
    fontsize: '16px',
    lineHeight: '18.62px',
    MozAppearance: 'none',
    WebkitAppearance: 'none',
    width: '100%',
    _focus: {
      borderColor: 'primary.dark.600',
      outline: 'none',
    },
    _focusVisible: {
      borderColor: 'primary.dark.600',
      outline: 'none',
    },
    _active: {
      borderColor: 'primary.dark.600',
      outline: 'none',
    },
  },
  icon: {
    right: '14px',
    fontSize: '22px',
    opacity: 0.7,
  },
})

export const SelectStyleConfig = selectConfigHelper.defineMultiStyleConfig({
  baseStyle: baseStylSelectStyleConfig,
})
