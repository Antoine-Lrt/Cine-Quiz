import { View, Text } from 'react-native'
import AwesomeButton from "react-native-really-awesome-button";
import React from 'react'

const Button = ({navigation }) => {
    return (
        // <AwesomeButton
        //     width={200}
        //     height={200}
        //     borderRadius={100}
        //     backgroundColor={'#c9102b'}
        //     backgroundActive={'#c9102b'}
        //     backgroundDarker={'#42050e'}
        //     textColor={'#FFF'}
        //     borderColor={'#9b0c1f'}
        //     borderWidth={10}
        //     onPress={()=> navigation.navigate('Quiz')}
            
            
            
        //     >
        //         JOUER
        //     </AwesomeButton>
            
            <Text
            onPress={() => navigation.navigate('Quiz')}> Start </Text>
      );
    }

export default Button