import { StyleSheet, Text, View } from 'react-native'
import React, {useState, useEffect} from 'react'
import axios from 'axios'

const Questions = (question) => {

    const [questions, setQuestion] = useState([])

    
    useEffect(()=>{
      axios.get('../../data/questionCiné.json').then((res) => setQuestion(res.data));
    }, [])
    
  return (
    <View style={styles.quizzQuestion}>
        
        
            <Text > {question}
            </Text>
        
  
      </View>
  )
}

export default Questions

const styles = StyleSheet.create({
    quizzQuestion: {
        marginVertical: 16,
        marginTop: 100,
        
        
      },
      quizzQuestionText: {
          color: '#FFF',
          fontSize: 20,
          fontFamily: 'Arial Rounded MT Bold',
          
      },
})