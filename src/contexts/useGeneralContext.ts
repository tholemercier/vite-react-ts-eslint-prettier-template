// This is a bit redundant as we could call useContext everywhere directly, but jest unit test

import { useContext } from 'react'
import { GeneralContext } from './GeneralContext'

// requires this hook to be able to mock it.
export const useGeneralContext = () => useContext(GeneralContext)
