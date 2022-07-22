import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import ButtonResponse from '../atoms/ButtonResponse'
import data from '../../data/TestQuizz.json'


const Responses = ({text}) => {
  return (
    <View style={styles.questionsContainer}>
            <ButtonResponse text={text} />
    </View>
  )
}

export default Responses

const styles = StyleSheet.create({
    questionsContainer: {
        alignItems: 'center',

    }
})