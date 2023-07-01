import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {NavigationContainer} from '@react-navigation/native';

import HomePage from './pages/HomePage/HomePage';
import EpisodePage from './pages/EpisodePage/EpisodePage';
import CharacterPage from './pages/CharacterPage/CharacterPage';

const Stack = createNativeStackNavigator();

function Router() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerTitleAlign: 'center',
        }}>
        <Stack.Screen
          options={{
            title: 'Episodes',
            headerTitleAlign: 'center',
            headerStyle: {
              backgroundColor: '#2A6574',
            },
            headerTintColor: '#BCDB43',
            headerTitleStyle: {fontWeight: 'bold'},
          }}
          name="HomePage"
          component={HomePage}
        />
        <Stack.Screen
          options={{
            title: 'Characters',
            headerTitleAlign: 'center',
            headerStyle: {
              backgroundColor: '#2A6574',
            },
            headerTintColor: '#BCDB43',
            headerTitleStyle: {fontWeight: 'bold'},
          }}
          name="EpisodePage"
          component={EpisodePage}
        />
        <Stack.Screen
          options={{
            title: 'Character Page',
            headerTitleAlign: 'center',
            headerStyle: {
              backgroundColor: '#2A6574',
            },
            headerTintColor: '#BCDB43',
            headerTitleStyle: {fontWeight: 'bold'},
          }}
          name="CharacterPage"
          component={CharacterPage}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default Router;
