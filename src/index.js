import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import Navigator from './Navigation';
import { StatusBar } from 'react-native';

export default function App() {
  return (
    <>
      <StatusBar barStyle="light-content" backgroundColor="#000" />
      <NavigationContainer>
          <Navigator/>
      </NavigationContainer>
    </>
  );
}


