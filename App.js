import React from 'react';
import 'react-native-gesture-handler';
import {
  Text,
  View,
} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Filter from './screen/Filter';
import Home from './screen/Home';
import Sort from './screen/ImageSlider';
import ImageSlider from './screen/ImageSlider';
import setInter from './screen/setInterval';
import Counter from './screen/Counter';
import SetOut from './screen/FlatlistAnimation';

const Stack = createStackNavigator()

const App = () => {
 return (
   <NavigationContainer>
     <Stack.Navigator>
       <Stack.Screen name='home' component={Home} />
       <Stack.Screen  name='filter' component={Filter} />
       <Stack.Screen name='out' component={SetOut}/>
       <Stack.Screen name='slide' component={ImageSlider}/>
       <Stack.Screen name='interval' component={setInter}/>
       <Stack.Screen name='count' component={Counter}/>
     </Stack.Navigator>
   </NavigationContainer>
)}

export default App