
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
  apiKey: 'api-key',
  authDomain: 'project-id.firebaseapp.com',
  databaseURL: 'https://project-id.firebaseio.com',
  projectId: 'project-id',
  storageBucket: 'project-id.appspot.com',
  messagingSenderId: 'sender-id',
  appId: 'app-id',
  measurementId: 'G-measurement-id',
};

firebase.initializeApp(firebaseConfig)


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

