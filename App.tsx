import { StatusBar } from "expo-status-bar"
import React from "react"
import { Text, View } from "react-native"

import { AppContainer } from "src/components"
import styles from "./AppStyles"

export default function App() {
  return (
    <AppContainer>
      <View style={styles.container}>
        <Text>Open up App.tsx to start working on your app!</Text>
        <StatusBar style="auto" />
      </View>
    </AppContainer>
  )
}
