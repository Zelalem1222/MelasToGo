import React , { useEffect , useState } from 'react';
import { ThemeProvider } from 'styled-components/native';

import { AuthenticationContextProvider } from './src/services/authentication/authentication.context';

import { useFonts as useOswald, Oswald_400Regular } from '@expo-google-fonts/oswald';
import { useFonts as useLato, Lato_400Regular } from '@expo-google-fonts/lato';

import { theme } from './src/infrastructure/theme';
import { Navigation } from './src/infrastructure/navigation';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';


import { FIREBASE_AUTH } from './firebase';
import { User, onAuthStateChanged } from 'firebase/auth';




export default function App() {


  const [oswaldLoaded] = useOswald({ Oswald_400Regular });
  const [ latoLoaded ] = useLato({Lato_400Regular })
  
  if(!oswaldLoaded && !latoLoaded){
    return null
  }
  

  return (
     <>
    <ThemeProvider theme={theme}>
      <AuthenticationContextProvider>
      <Navigation />
    </AuthenticationContextProvider>
    </ThemeProvider>
    </> 

  );
}


