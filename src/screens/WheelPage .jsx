import React, {Component} from 'react';
import {View,Text,StyleSheet,StatusBar,Button,TouchableOpacity} from 'react-native';
import WheelOfFortune from 'react-native-wheel-of-fortune';
import AwesomeButton from "react-native-really-awesome-button";
import { useNavigation } from '@react-navigation/native'

const navigation = useNavigation()

const participants = [
  "Culture Ciné",
  "Répliques",
  "Images",
  "Culture Ciné",
  "Répliques",
  "Images",
  

];

class WheelPage  extends Component {

  

  constructor(props) {
    super(props);

    this.state = {
      winnerValue: null,
      winnerIndex: null,
      started: false,
    };
    this.child = null;
  }

  buttonPress = () => {
    this.setState({
      started: true,
    });
    this.child._onPress();
  };

  render() {
    const wheelOptions = {
      rewards: participants,
      colors: ['red','yellow','blue',],
      knobSize: 30,
      borderWidth: 9,
      borderColor: '#CEB2A1',
      innerRadius: 20,
      duration: 6000,
      backgroundColor: '##644735',
      textAngle: 'horizontal',
      knobSource: require('../../assets/images/knob.png'),
      onRef: ref => (this.child = ref),
    };
    return (
      <View style={styles.container}>
        <StatusBar barStyle={'light-content'} />
        <View style={styles.containerText} >
          <Text > Tournez la roue</Text>
        </View>
        <WheelOfFortune
          options={wheelOptions}
          getWinner={(value, index) => {
            this.setState({winnerValue: value, winnerIndex: index});
          
          }}
        />
          <View style={styles.startButtonView}>
            <AwesomeButton
              width={200}
              height={70}
              borderRadius={10}
              backgroundColor={'#F6F6F4'}
              backgroundActive={'#F6F6F4'}
              backgroundDarker={'#E3D5CA'}
              onPress={() => this.buttonPress()}
              style={styles.buttonNextQuestion}   
              >
                  <Text style={styles.buttonNextQuestionText} >
                      GO
                  </Text>
            </AwesomeButton>
          </View>

        {this.state.winnerIndex != null && (
          <View style={styles.winnerView}>
            <Text style={styles.winnerText}>
              You win {participants[this.state.winnerIndex]}
            </Text>
            <TouchableOpacity
              onPress={()=> useNavigation('Quiz')}
              style={styles.tryAgainButton}>
              <Text style={styles.tryAgainText}>TRY AGAIN</Text>
            </TouchableOpacity>
          </View>
        )}
      </View>
    );
  }
}
export default WheelPage ;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#E3D5CA',
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
    // justifyContent: 'center',
  },

  containerText: {
    color: 'red'
  },

  startButtonView: {
    marginBottom: 20,
  },
  startButton: {
    backgroundColor: '#CEB2A1',
    width: 200,
    height: 70,
    marginTop: 50,
    padding: 5,
    borderRadius: 10,
    alignItems:'center',
    justifyContent: 'center'
  },
  winnerView: {
    position: 'absolute',
    justifyContent: 'center',
    alignItems: 'center',
  },
  tryAgainButton: {
    padding: 10,
  },
  winnerText: {
    fontSize: 30,
  },
  tryAgainButton: {
    padding: 5,
    backgroundColor: 'rgba(0,0,0,0.5)',
  },
  tryAgainText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#fff',
  },
});

