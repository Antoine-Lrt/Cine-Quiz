import { StyleSheet, Text } from 'react-native'
import AwesomeButton from "react-native-really-awesome-button";
import React from 'react'
import { useNavigation } from '@react-navigation/native'

function HomeButton ({screenName, text})  {

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
                <Text style={styles.buttonText}> {text} </Text>
            </AwesomeButton>
            
            
      );
    }

export default HomeButton

const styles = StyleSheet.create({

    buttonText: {
        fontSize: 30,
        color: '#FFF',
        fontFamily: 'Arial Rounded MT Bold'

    }
  })