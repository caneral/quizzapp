import React from 'react';
import { SafeAreaView, StatusBar, StyleSheet, Text, View } from 'react-native';

//Screens
import Home from './screens/Home';
import NewGame from './screens/NewGame';
import Empty from './screens/Empty';
import Section from './screens/Section';
import { NavigationContainer } from '@react-navigation/native';

import {createNativeStackNavigator} from '@react-navigation/native-stack'
import Game from './screens/Game';

const Stack = createNativeStackNavigator();


export default function App() {
  return (
      <NavigationContainer style={styles.container}>
        {/* StatusBar hidden burada yukarı kısımda çıkan saat vs. görmemizi engelliyor. */}
        <StatusBar hidden/> 
        <Stack.Navigator >
          <Stack.Screen options={{headerShown:false}} name="Home" component={Home}/>
          <Stack.Screen options={{headerShown:false, gestureEnabled:false}} name="NewGame" component={NewGame}/>
          <Stack.Screen options={{headerShown:false, gestureEnabled:false}} name="Section" component={Section}/>
          <Stack.Screen options={{headerShown:false}} name="Empty" component={Empty}/>
          <Stack.Screen options={{headerShown:false, gestureEnabled:false}} name="Game" component={Game}/>
          {/* gestureEnabled:false -> sola doğru kaydırıp geri gitmeyi engelliyor. */}
        </Stack.Navigator>
        
      </NavigationContainer>
  );
}
  
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
