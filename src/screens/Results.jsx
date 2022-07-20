import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native'
import React from 'react'


const Results = ({navigation}) => {
  return (
    <View>
      <View>
        <Text>Results</Text>
      </View>
      <View style={styles.bannerContainer}>
      <Image source={{
        url:'https://logo-marque.com/wp-content/uploads/2020/12/Hogwarts-Logo-650x366.png'
        }}
        style={styles.banner}
      />
    </View>
    <View>
    <TouchableOpacity onPress={()=> navigation.navigate("Home")}>
        <Text> Accueil </Text>
      </TouchableOpacity>
    </View>

    </View>
  )
}

export default Results

const styles = StyleSheet.create({
  bannerContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'blue'
  },
  banner: {
    height: 300,
    width: 300,
  }
})