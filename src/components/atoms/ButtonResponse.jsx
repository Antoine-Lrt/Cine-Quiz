import { StyleSheet, View } from "react-native";
import AwesomeButton from "react-native-really-awesome-button";
import React from 'react'


function ButtonResponse ({text, style})  {

    

    return (

        <AwesomeButton
            width={'100%'}
            height={70}
            borderRadius={100}
            backgroundColor={'#ffedbf'}
            backgroundActive={'#ffbd16'}
            backgroundDarker={'#db9d00'}
            textColor={'#bf8900'} 
            style={styles.buttonQuestion}   
            >

             {text} 
        
            </AwesomeButton>

   
            
      );
    }

export default ButtonResponse

const styles = StyleSheet.create({
    buttonQuestion:{
        marginTop: 20,
        marginBottom: 20,
        alignItems: "center"
    }

  })

