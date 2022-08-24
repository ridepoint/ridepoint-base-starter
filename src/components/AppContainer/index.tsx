import React from "react"
import { Provider as PaperProvider } from "react-native-paper"
import theme from "src/styles/theme"

type Props = {
  children: React.ReactNode
}

// Wrapped app component into specific node or provider
const AppContainer = ({ children }: Props) => {
  return <PaperProvider theme={theme}>{children}</PaperProvider>
}

export default AppContainer
