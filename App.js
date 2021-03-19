import 'react-native-gesture-handler';
import React from 'react';
import { LogBox, StatusBar } from 'react-native';
import AuthProvider from './src/contexts/auth';
import Routes from './src/routes/index';
import { NavigationContainer } from '@react-navigation/native';

LogBox.ignoreAllLogs()

export default function App() {
  return (
    <NavigationContainer>
      <AuthProvider>
        <StatusBar backgroundColor='#3F5C57' barStyle="light-content" />
        <Routes />
      </AuthProvider>
    </NavigationContainer>
  );
}

