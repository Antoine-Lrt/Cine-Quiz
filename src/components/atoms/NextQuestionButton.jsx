import { StyleSheet, View , Text} from "react-native";
import AwesomeButton from "react-native-really-awesome-button";
import React from 'react'
import { useNavigation } from '@react-navigation/native'


function NextQuestionButton ({screenName, text,})  {

    const navigation = useNavigation();

    return (

        <AwesomeButton
            width={200}
            height={70}
            borderRadius={10}
            backgroundColor={'#F6F6F4'}
            backgroundActive={'#F6F6F4'}
            backgroundDarker={'#E3D5CA'}
            onPress= {()=> navigation.navigate(screenName)}
            style={styles.buttonNextQuestion}   
            >
                <Text style={styles.buttonNextQuestionText} >
                    {text}
                </Text>
            </AwesomeButton>

   
            
      );
    }

export default NextQuestionButton

const styles = StyleSheet.create({
    buttonNextQuestion:{
        marginTop: 20,
        marginBottom: 20,
        alignItems: "center"
    },
    buttonNextQuestionText: {
        color: '#CEB2A1',
        fontStyle: "italic",
        fontWeight: '600'
    }

  })

