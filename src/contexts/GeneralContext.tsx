import { PropsWithChildren, createContext } from 'react'

type ContextState = Record<string, never>
export const GeneralContext = createContext<ContextState>({})

export const GeneralContextProvider = (props: PropsWithChildren) => {
  return <GeneralContext.Provider value={{}}>{props.children}</GeneralContext.Provider>
}
