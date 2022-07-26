import { StyleSheet, View, Text, SafeAreaView } from 'react-native'
import React, { useEffect, useState } from 'react'
// import ButtonResponse from '../atoms/ButtonResponse';
import AwesomeButton from "react-native-really-awesome-button";
import data from '../../data/quizz.json'

import NextQuestionButton from '../atoms/NextQuestionButton';




function QuestionResponse(){
    const allQuestions = data;

    const randomNumber = (min, max) => {
      return Math.floor(Math.random() * (max - min + 1)) + min;
    } 
    
    
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(randomNumber(0, 50));
    const [currentOptionSelect, setCurrentOptionSelect] = useState(null);
    const [goodOption, setGoodOption] = useState(null);
    const [OptionDisable, setOptionDisable] =useState(false);
    const [score, setScore] = useState(0);
    const [displayAnecdote, setAnecdote] = useState(false)
    const [nextQuestion, setNextQuestion ] =useState(false);
    
    
        // const randomFromArray = (myArray) => {
        //   if(alreadyDone.length ===0) {
        //     for (let i =0; i<myArray.length; i++) {
        //       alreadyDone.push(i);
        //     }
    
        //     const randomValueIndex = Math.floor(Math.random() * alreadyDone.length);
            
        //     const indexOfItemInMyArray = alreadyDone[randomValueIndex];
    
        //     alreadyDone.splice(randomValueIndex, 1);
    
            
        //     return myArray[indexOfItemInMyArray];
        //   }
    
        // }

    const valideOption = (optionChoice) => {
      const good_option = allQuestions[currentQuestionIndex]['response'];
      setCurrentOptionSelect(optionChoice);
      setGoodOption(good_option);
      setOptionDisable(true);
      if(optionChoice == good_option){
          setScore(score+1)
      }
          setAnecdote(true)

          setNextQuestion(true)
    }


    // Pour la V1 NOUS SOMME REDIRIGER A LA ROULLETTE POUR L'EQUIPE SUIVANTE
    const handleNextQuestion = () => {
   
        // setCurrentQuestionIndex(randomNumber(0, 50))
        setCurrentOptionSelect(null);
        setGoodOption(null);
        setOptionDisable(null);
        setAnecdote(false)
        setNextQuestion(false)
  
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
            backgroundColor={options==goodOption 
            ?'#51c436'
            :options==currentOptionSelect
            ? '#e5383b'
            :'#f5ebe0'}
            backgroundActive={options==goodOption 
            ?'#51c436'
            :options==currentOptionSelect
            ? '#d62c26'
            :'#bf8900Ò'}
            backgroundDarker={options==goodOption 
            ?'#1d5819'
            :options==currentOptionSelect
            ? '#7e1a16'
            :'#c7a794'}
            style={styles.buttonResponse}   
            >

            <Text 
              style={
                {color: options==goodOption 
                ?'#1d5819'
                :options==currentOptionSelect
                ? '#660708'
                :'#b1a7a6',
                fontWeight: 'bold',
                fontSize: 15
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

    const renderAnecdote = () => {
      if(displayAnecdote){
        return (
          <View style={styles.anecdote}>
            <Text style={styles.anecdoteTitle}>
              Plus d'infos :
            </Text>
              
            <Text style={styles.anecdoteText} >
              {allQuestions[currentQuestionIndex]?.anecdote}
            </Text>
          </View>
        )
      }else{
        return null
      }   
    }

    const renderNextQuestion = () => {
      if(nextQuestion){
        return (
          <View style={{width:'100%',alignItems: 'center'}}>
            <NextQuestionButton s
                creenName={'Home'} 
                text={'Équipe Suivante'}/>
          </View>
          
        )
      }else{
        return null
      }   
    }


    
  
  return (
    <SafeAreaView style={styles.questionAndResponsesContainer}>
      {/* QUESTION */}

      {renderQuestion()}

      {/* PROPOSITON */}

      {renderOptions()}

      {/* ANECDOTE  */}
      
      {renderAnecdote()}

      {/* NEXT QUESTION BUTTON */}
      

      {renderNextQuestion()}

 
    </SafeAreaView>
  )
}

export default QuestionResponse

const styles = StyleSheet.create({

  // ALL STYlE 
  questionAndResponsesContainer: {
    marginTop: 100,
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
      alignItems: "center"
  },

  // ANECDOTE 

  anecdote:{
    alignItems: 'center',
    marginTop: 20,

  },

  anecdoteTitle :{
    color: '#FFF',
    fontSize: 17,
    fontWeight: 'bold',
    marginTop: 30,
    
  },

   anecdoteText: {
    color: '#FFF',
    fontSize: 15,
    fontStyle: "italic",
    fontWeight: '500',
    marginTop: 10,
    marginBottom: 10,
   }

  //  NEXT QUESTION BUTTON 



})