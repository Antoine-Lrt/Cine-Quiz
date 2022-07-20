import { StyleSheet, Text } from 'react-native'
import AwesomeButton from "react-native-really-awesome-button";
import React from 'react'
import { useNavigation } from '@react-navigation/native'

function ButtonHome ({screenName})  {

    const navigation = useNavigation();

    return (
        <AwesomeButton
            width={200}
            height={200}
            borderRadius={100}
            backgroundColor={'#c9102b'}
            backgroundActive={'#c9102b'}
            backgroundDarker={'#42050e'}
            textColor={'#FFF'}
            borderColor={'#9b0c1f'}
            borderWidth={10}
            onPress= {()=> navigation.navigate(screenName)}
            style={styles.button}
                  
            >
                <Text style={styles.buttonText}> Jouer </Text>
            </AwesomeButton>
            
            
      );
    }

export default ButtonHome

const styles = StyleSheet.create({

    buttonText: {
        fontSize: 30,
        color: '#FFF',
        fontFamily: 'Arial Rounded MT Bold'

    }
  })