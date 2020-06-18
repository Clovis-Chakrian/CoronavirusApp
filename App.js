import 'react-native-gesture-handler';

import React from 'react';
import { View, Text, StatusBar } from 'react-native';

import { NavigationContainer, DefaultTheme } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import { AppLoading } from 'expo';
import {
  useFonts,
  Roboto_400Regular,
  Roboto_700Bold,
} from '@expo-google-fonts/roboto';
import { 
  Ubuntu_400Regular,
  Ubuntu_700Bold,
} from '@expo-google-fonts/ubuntu';

import styles from './src/styles/style';

import Brazil from './src/pages/Brazil';
import World from './src/pages/World';
import Hospitals from './src/pages/Hospitals';

const Tab = createBottomTabNavigator();

const Theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    background: '#FFF',
  },
};

export default function App() {
  let [fontsLoaded] = useFonts({
    Roboto_400Regular,
    Ubuntu_400Regular,
    Ubuntu_700Bold
  });

  if (!fontsLoaded) {
    return (
      <AppLoading />
    );
  } else {
    return (
      <NavigationContainer theme={Theme}>
        <StatusBar hidden />
        <View style={styles.titleAppContainer}>
          <Text style={styles.titleApp}>CoronavírusApp</Text>
        </View>
        <Tab.Navigator initialRouteName='Mundo'>
          <Tab.Screen name='Brasil' component={Brazil} />
          <Tab.Screen name='Mundo' component={World} />
          <Tab.Screen name='Postos de Saúde' component={Hospitals} />
        </Tab.Navigator>
      </NavigationContainer>
    );
  }
};