import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import ButtonResponse from '../atoms/ButtonResponse'

const Responses = () => {
  return (
    <View style={styles.questionsContainer}>

        <ButtonResponse text={'Colin Farrell'} />
        <ButtonResponse text={'Ewan McGregor'} />
        <ButtonResponse text={'Edward Norton'} />
        <ButtonResponse text={'Jim Carrey'} />

    </View>
  )
}

export default Responses

const styles = StyleSheet.create({
    questionsContainer: {
        alignItems: 'center',

    }
})