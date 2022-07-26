import { StyleSheet, SafeAreaView } from 'react-native'
import React from 'react'

import { NavigationContainer } from '@react-navigation/native'
import MyNavigation from './src/navigation/navigation'

const App = () => {
  return (
      <NavigationContainer>
        <MyNavigation 
        />
      </NavigationContainer>
  )
}

export default App

const styles = StyleSheet.create({
  container:{
    paddingTop: 40,
    paddingHorizontal: 23,
  }
})