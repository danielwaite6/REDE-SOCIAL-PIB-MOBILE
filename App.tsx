//import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import AppLoading from 'expo-app-loading';
import { ThemeProvider } from 'styled-components';
import {
  useFonts,
  Poppins_400Regular,
  Poppins_500Medium,
  Poppins_700Bold,
} from '@expo-google-fonts/poppins';
import theme from './src/global/styles/theme';
import { Routes } from './src/routes/index';
//import { Register } from './src/screens/Register';

export default function App() {

  const [fonstLoaded] = useFonts({
    Poppins_400Regular,
    Poppins_500Medium,
    Poppins_700Bold,
  });
  if (!fonstLoaded) {
    return <AppLoading />
  }

  return (
    (
      <ThemeProvider theme={theme}>
        <NavigationContainer>
          <Routes />
        </NavigationContainer>
      </ThemeProvider>
    )
  );
};