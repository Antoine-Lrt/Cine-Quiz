import { StyleSheet, View, ImageBackground} from 'react-native'
import React from 'react'
import HomeButton from '../components/atoms/HomeButton'





const Home = () => {

  
 

  return (
    <ImageBackground style={ styles.imgBackground } 
    resizeMode='cover' 
    source={require('../../assets/images/home.png')}
    >

    <View style={styles.homeContainer}>

    
        <HomeButton 
          screenName={'WheelPage'}
          text={'Jouer'}
        />

    </View>

    </ImageBackground>

  )
}


export default Home

const styles = StyleSheet.create({


  homeContainer:{
    position: 'absolute',
    left:    90,
    top:      230,
  },
  
  
  imgBackground: {
    flex: 1,
    
},
      
})