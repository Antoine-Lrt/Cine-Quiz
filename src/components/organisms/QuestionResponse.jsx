import { StyleSheet, View, Text } from 'react-native'
import React, { useEffect, useState } from 'react'
import ButtonResponse from '../atoms/ButtonResponse';
import data from '../../data/quizz.json'
import codegenNativeCommands from 'react-native/Libraries/Utilities/codegenNativeCommands';


function Quizz(){
    const allQuestions = data;
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(9);
    const [currentOptionSelected, setCurrentOptionSelected] = useState(null);
    const [currentOptionChoice, setCurrentOptionChoice] =useState(null);
    const


    const goodAnswer = (choice) => {
      const good_option = allQuestions[currentQuestionIndex]['good_option'];
    }


    const renderQuestion = () => {
      return(
        <View>
          <Text style={styles.quizzQuestionText} >
            {allQuestions[currentQuestionIndex]?.question}
          </Text>   
        </View>
      )
    }


    const renderOptions = () => {
      return(
        <View>
          {allQuestions[currentQuestionIndex]?.options.map( options =>
            <ButtonResponse text={options} />
          )}
        </View>
      )

    }
  
  return (
    <View style={styles.questionAndResponsesContainer}>
      {/* QUESTION */}

      {renderQuestion()}

      {/* PROPOSITON */}

      {renderOptions()}

 
    </View>
  )
}

export default Quizz

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