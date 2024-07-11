import { defineStyleConfig } from '@chakra-ui/react'

export const ButtonStyleConfig = defineStyleConfig({
  // The styles all button have in common
  baseStyle: {
    display: 'flex',
    placeItems: 'center',
    borderRadius: '0.45em',
    padding: '0.625rem 1.125rem',
    fontWeight: 600,
    fontSize: 'sm',
    letterSpacing: '0.2px',
    width: 'min-content',
    textDecoration: 'none',
    transition: 'all 0.15s ease-in-out',
    backgroundImage: `radial-gradient(
      227.71% 180.23% at 90.64% 130.38%,
      var(--chakra-colors-primary-blue-100) 0%,
      var(--chakra-colors-primary-blue-900) 100%
    ),
    radial-gradient(
      207.84% 121.69% at -5.69% 111.39%,
      var(--chakra-colors-primary-blue-100) 0%,
      var(--chakra-colors-primary-blue-900) 100%
    ),
    linear-gradient(
      206deg,
      rgba(123, 134, 151, 0.2) 0%,
      rgba(25, 27, 30, 0.2) 100%
    ),
    linear-gradient(180deg, rgba(0, 0, 0, 0.2) 0%, rgba(0, 0, 0, 0.2) 100%)`,

    _hover: {
      boxShadow: `inset 0 0 0 1px black, 0 0 0 2px var(--chakra-colors-primary-dark-700),
        0 0 0 4px rgba(0, 0, 0, 0.25), 0 11px 27px -5px rgba(0, 0, 0, 0.53),
        0 25px 25px -4px rgba(0, 0, 0, 0.35)`,
    },

    _active: {
      boxShadow: `inset 0 0 0 1px black, 0 0 0 2px var(--chakra-colors-primary-dark-500),
        0 0 0 4px rgba(0, 0, 0, 0.25), 0 11px 27px -5px rgba(0, 0, 0, 0.53),
        0 25px 25px -4px rgba(0, 0, 0, 0.35)`,
    },
  },
})
