import React  from 'react'
import { StyleSheet, Text, View, TouchableOpacity, ImageBackground } from 'react-native'
import QuestionResponse from '../components/organisms/QuestionResponse'



const Quiz = ({navigation}) => {

    console.log('Hey')
  return (
    
        <ImageBackground style={ styles.imgBackground } 
    resizeMode='cover' 
    source={require('../../assets/images/background.png')}
    >

      <View style={styles.quizzContainer}>

     

      <QuestionResponse />
      
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
    justifyContent: 'space-between',

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