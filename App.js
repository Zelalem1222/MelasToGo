import React, { useState , useEffect } from 'react';
import { ThemeProvider } from 'styled-components/native';
import * as firebase from "firebase"

import { RestaurantsContextProvider } from './src/services/restaurants/restaurants.context';
import { LocationContextProvider } from './src/services/locations/location.context';
import { FavouriteContextProvider } from './src/services/favourites/favourites.context';

import { useFonts as useOswald, Oswald_400Regular } from '@expo-google-fonts/oswald';
import { useFonts as useLato, Lato_400Regular } from '@expo-google-fonts/lato';

import { theme } from './src/infrastructure/theme';
import { Navigation } from './src/infrastructure/navigation';


const firebaseConfig = {
    apiKey: "AIzaSyDmLsga9EmRRyU-mlMwnf5-6U0QRwuH5kI",
    authDomain: "mealstogo-92686.firebaseapp.com",
    projectId: "mealstogo-92686",
    storageBucket: "mealstogo-92686.appspot.com",
    messagingSenderId: "210812673643",
    appId: "1:210812673643:web:d8d6ff06e7c655d2205b2e"
};

firebase.initializeApp(firebaseConfig)


export default function App() {
   const [ isAuthenticated , setIsAutehenticated ] = useState(false)

   useEffect(() => {
    firebase
      .auth()
      .signInWithEmailAndPassword("email@gmal.com" , "zola123")
      .then((user) => {
        console.log(user)
        setIsAutehenticated(true)
      })
      .catch((e) => {
        console.log(e)
      })
   }, [])

  const [oswaldLoaded] = useOswald({ Oswald_400Regular });
  const [ latoLoaded ] = useLato({Lato_400Regular })
  
  if(!oswaldLoaded && !latoLoaded){
    return null
  }

  return (
    <>
    <ThemeProvider theme={theme}>
      <FavouriteContextProvider>
      <LocationContextProvider>
      <RestaurantsContextProvider>
      <Navigation />
    </RestaurantsContextProvider>
    </LocationContextProvider>
    </FavouriteContextProvider>
    </ThemeProvider>
    </>
  );
}

