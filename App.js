import { StyleSheet, SafeAreaView } from 'react-native'
import React from 'react'

import Home from './src/screens/Home'
import Quiz from './src/screens/Quiz'
import Results from './src/screens/Results'
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