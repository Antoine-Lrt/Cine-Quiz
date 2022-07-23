import { StyleSheet, View , Text} from "react-native";
import AwesomeButton from "react-native-really-awesome-button";
import React from 'react'


function NextQuestionButton ({text, style})  {

    

    return (

        <AwesomeButton
            width={200}
            height={70}
            borderRadius={10}
            backgroundColor={'#F6F6F4'}
            backgroundActive={'#F6F6F4'}
            backgroundDarker={'#E3D5CA'}
            style={styles.buttonNextQuestion}   
            >
                <Text style={styles.buttonNextQuestionText} >
                    Suivante
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

