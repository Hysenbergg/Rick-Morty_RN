import React from 'react'
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {NavigationContainer} from '@react-navigation/native';

import HomePage from './pages/HomePage/HomePage';
import EpisodePage from './pages/EpisodePage/EpisodePage';
import CharacterPage from './pages/CharacterPage/CharacterPage';

const Stack = createNativeStackNavigator();

function Router() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name='HomePage' component={HomePage} />
        <Stack.Screen name='EpisodePage' component={EpisodePage} />
        <Stack.Screen name='CharacterPage' component={CharacterPage} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default Router