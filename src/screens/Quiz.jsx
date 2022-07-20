import React  from 'react'
import { useEffect, useState } from 'react'
import { StyleSheet, Text, View, TouchableOpacity, ImageBackground } from 'react-native'
import axios from 'axios'



const Quiz = ({navigation}) => {

    const [questions, setQuestion] = useState([])

    
    useEffect(()=>{
      axios.get('https://opentdb.com/api.php?amount=10&category=11&type=multiple').then((res) => setQuestion(res.data));
    }, [])
  return (
    
        <ImageBackground style={ styles.imgBackground } 
    resizeMode='cover' 
    source={require('../../assets/images/background.png')}
    >

      <View style={styles.quizzContainer}>





      <View style={styles.quizzQuestion}>
        <Text> Question 1</Text>
      </View>
      <View style={styles.quizzResponses}>
        <TouchableOpacity>
          <Text> Respons 1</Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text> Respons 1</Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text> Respons 1</Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text> Respons 1</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.quizzButton}> 
        <TouchableOpacity>
          <Text> Passer </Text>
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
    height: '100%'
  },
  quizzQuestion: {
    marginVertical: 16,
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
  }
})