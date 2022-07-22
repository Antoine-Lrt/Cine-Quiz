import { StyleSheet, View, Text } from 'react-native'
import React, { useEffect, useState } from 'react'
// import ButtonResponse from '../atoms/ButtonResponse';
import AwesomeButton from "react-native-really-awesome-button";
import data from '../../data/quizz.json'



function QuestionResponse(){
    const allQuestions = data;
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(47);
    const [currentOptionSelect, setCurrentOptionSelect] = useState(null);
    const [goodtOption, setGoodOption] = useState(null);
    const [OptionDisable, setOptionDisable] =useState(false);
    const [score, setScore] = useState(0)


    const valideOption = (optionChoice) => {
      const good_option = allQuestions[currentQuestionIndex]['response'];
      setCurrentOptionSelect(optionChoice);
      setGoodOption(good_option);
      setOptionDisable(true);
      if(optionChoice == good_option){
          setScore(score+1)
      }
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
          {
            allQuestions[currentQuestionIndex]?.options.map( options =>
          
            <AwesomeButton
            onPress={() => valideOption(options)}
            key={options}
            width={'100%'}
            height={70}
            borderRadius={100}
            backgroundColor={options==goodtOption 
            ?'#51c436'
            :options==currentOptionSelect
            ? '#d62c26'
            :'#ffedbf'}
            backgroundActive={options==goodtOption 
            ?'#51c436'
            :options==currentOptionSelect
            ? '#d62c26'
            :'#ffedbf'}
            backgroundDarker={options==goodtOption 
            ?'#1d5819'
            :options==currentOptionSelect
            ? '#7e1a16'
            :'#ffedbf'}
            style={styles.buttonResponse}   
            >

            <Text 
              style={
                {color: options==goodtOption 
                ?'#1d5819'
                :options==currentOptionSelect
                ? '#7e1a16'
                :'#bf8900'
                } 
                } 
                
                
                >
                {options}
                </Text> 

            </AwesomeButton>
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

export default QuestionResponse

const styles = StyleSheet.create({

  // ALL STYlE 
  questionAndResponsesContainer: {
    marginTop: 100
  },

  // QUESTION STYLE 

  quizzQuestion: {
      marginVertical: 16,
      marginTop: 100,
    },
    quizzQuestionText: {
        color: '#FFF',
        fontSize: 20,
        fontFamily: 'Arial Rounded MT Bold',
    },

    // RESPONSES STYLE 

    buttonResponse:{
      marginTop: 20,
      marginBottom: 20,
      alignItems: "center"
  },


})