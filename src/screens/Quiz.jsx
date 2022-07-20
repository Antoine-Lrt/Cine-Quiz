import React  from 'react'
import axios from 'axios'
import { useEffect, useState } from 'react'
import { StyleSheet, Text, View, TouchableOpacity, ImageBackground } from 'react-native'
import Questions from '../components/atoms/Questions'
import Responses from '../components/molecules/Responses'


const Quiz = ({navigation}) => {

    
  return (
    
        <ImageBackground style={ styles.imgBackground } 
    resizeMode='cover' 
    source={require('../../assets/images/background.png')}
    >

      <View style={styles.quizzContainer}>

      
          <Questions />
          <Responses />
       
      
      <View style={styles.quizzButton}> 
        <TouchableOpacity>
          <Text style={styles.quizzButtonText}> Passer </Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text> Suivant </Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={()=> navigation.navigate("Results")}>
          <Text> Fin </Text>
        </TouchableOpacity> 

        
      </View>
    </View>

    </ImageBackground>


  )
}

export default Quiz

const styles = StyleSheet.create({

  imgBackground: {
    flex: 1,
    
},

  quizzContainer:{
    padding: 12,
    height: '100%',
    alignContent:'center',
    flexDirection: 'column',
    justifyContent: 'space-between'
  },
  
  quizzResponses:{
    marginVertical: 16,
    flex:1,
    
  },


  quizzButton: {
    marginBottom: 12,
    paddingVertical:16,
    justifyContent: 'space-between',
    flexDirection: 'row',
    
  },

  quizzButtonText: {
    color: '#fff'
  }
})