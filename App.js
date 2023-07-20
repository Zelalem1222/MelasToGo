import React from 'react';
import { ThemeProvider } from 'styled-components/native';


import { RestaurantsContextProvider } from './src/services/restaurants/restaurants.context';
import { LocationContextProvider } from './src/services/locations/location.context';
import { FavouriteContextProvider } from './src/services/favourites/favourites.context';


import { useFonts as useOswald, Oswald_400Regular } from '@expo-google-fonts/oswald';
import { useFonts as useLato, Lato_400Regular } from '@expo-google-fonts/lato';

import { theme } from './src/infrastructure/theme';
import { Navigation } from './src/infrastructure/navigation';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Login from './src/Login';


const Stack = createStackNavigator();

export default function App() {

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




    // <NavigationContainer>
    //    <Stack.Navigator initialRouteName="Loading">
    //     <Stack.Screen name='Login' component={Login} options={{ headerShown: false }}/>
    //     </Stack.Navigator>
    //   </NavigationContainer>