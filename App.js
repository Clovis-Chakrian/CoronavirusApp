import 'react-native-gesture-handler';

import React from 'react';
import { View, Text, StatusBar, Image } from 'react-native';

import { NavigationContainer, DefaultTheme, useScrollToTop } from '@react-navigation/native';
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
import BrazilStates from './src/pages/BrazilStates';
import Info from './src/pages/Info';
import { TouchableOpacity } from 'react-native-gesture-handler';

const Tab = createBottomTabNavigator();

const Theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    background: '#FFF',
  },
};

function button() {
  return (
    <View>
      <TouchableOpacity>
        <Image source={require('./assets/icons/BrazilFlag_1.png')} style={{ height: 40, width: 40, alignSelf: 'center', marginTop: 30 }} />
      </TouchableOpacity>
    </View>
  )
};


export default function App() {
  let [fontsLoaded] = useFonts({
    Roboto_400Regular,
    Roboto_700Bold,
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
        <Tab.Navigator
          initialRouteName='Brasil'
          tabBarOptions={{
            showLabel: false,
            activeBackgroundColor: '#DCDCDC',
            inactiveBackgroundColor: '#FFF',
            tabStyle: { borderTopColor: '#00BFFF', borderTopWidth: 1 },
          }}
        >

          <Tab.Screen
            name='Brasil'
            component={Brazil}
            options={{
              tabBarIcon: ({ color, size }) => (
                <Image source={require('./assets/icons/BrazilFlag_1.png')} color={color} size={size} style={{ height: 40, width: 40, alignSelf: 'center', marginTop: 30 }} />
              ),
            }} />

          <Tab.Screen
            name='Mundo'
            component={World}
            options={{
              tabBarIcon: ({ color, size }) => (
                <Image source={require('./assets/icons/world.png')} color={color} size={size} style={{ height: 130, width: 130, alignSelf: 'center', marginTop: 26, marginRight: 20 }} />
              ),
            }} />

          <Tab.Screen
            name='Hospitais'
            component={Hospitals}
            options={{
              tabBarIcon: ({ color, size }) => (
                <Image source={require('./assets/icons/Hospitals.png')} color={color} size={size} style={{ height: 70, width: 70, alignSelf: 'center', marginTop: 45, marginLeft: 3 }} />
              ),
            }} />

          <Tab.Screen
            name='Estado'
            component={BrazilStates}
            options={{
              tabBarIcon: ({ color, size }) => (
                <Image source={require('./assets/icons/brazilmap.png')} color={color} size={size} style={{ height: 35, width: 35, alignSelf: 'center', marginTop: 20 }} />
              ),
            }} />

          <Tab.Screen
            name='Info'
            component={Info}
            options={{
              tabBarIcon: ({ color, size }) => (
                <Image source={require('./assets/icons/Info.png')} color={color} size={size} style={{ height: 50, width: 40, alignSelf: 'center', marginTop: 30 }} />
              ),
            }} />
        </Tab.Navigator>
      </NavigationContainer>
    );
  }
};