import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Home from '../screens/Home';
import Quiz from '../screens/Quiz';
import Results from '../screens/Results';
import WheelPage from '../screens/WheelPage '



const Stack = createStackNavigator();

function MyNavigation() {
  return (
    <Stack.Navigator>
      <Stack.Screen 
            name="Home" 
            component={Home} 
            options={{headerShown: false}} 
            />  
      <Stack.Screen 
            name="Quiz" 
            component={Quiz}
            options={{headerShown: false}}  

            />
      <Stack.Screen 
            name="Results" 
            component={Results}
            options={{headerShown: false}}   

            />
      <Stack.Screen 
            name="WheelPage" 
            component={WheelPage}
            options={{headerShown: false}}   
              
            />
    </Stack.Navigator>
  );
};

export default MyNavigation