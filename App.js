import React , { useEffect , useState } from 'react';
import { ThemeProvider } from 'styled-components/native';


import { RestaurantsContextProvider } from './src/services/restaurants/restaurants.context';
import { LocationContextProvider } from './src/services/locations/location.context';
import { FavouriteContextProvider } from './src/services/favourites/favourites.context';
import { AuthenticationContextProvider } from './src/services/authentication/authentication.context';

import { useFonts as useOswald, Oswald_400Regular } from '@expo-google-fonts/oswald';
import { useFonts as useLato, Lato_400Regular } from '@expo-google-fonts/lato';

import { theme } from './src/infrastructure/theme';
import { Navigation } from './src/infrastructure/navigation';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Login from './src/Login';
import List from './src/list';
import Detail from './src/details';

import { FIREBASE_AUTH } from './firebase';
import { User, onAuthStateChanged } from 'firebase/auth';



const Stack = createStackNavigator();
const InsideStack = createStackNavigator();

import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";


function InsideLayout() {
  return (
    <InsideStack.Navigator>
       
        <InsideStack.Screen name='Home' component={List} options={{ headerShown: false }}/>
        <InsideStack.Screen name='Details' component={Detail} options={{ headerShown: false }}/>
      </InsideStack.Navigator>
  )}
export default function App() {
  // const auth = FIREBASE_AUTH;
  // const [isAuthenticated , setIsAuthenticated] = useState(false)
  // useEffect(() => {
  //   setTimeout(() => {signInWithEmailAndPassword(auth , 'email12@gmail.com' , 'email123').then((user) => {
  //      console.log(user);
  //      setIsAuthenticated(true); 
  //   })
  //   .catch((e) => {
  //     console.log(e)
  //   })
  // } , 2000)
  // }, [])

  const [oswaldLoaded] = useOswald({ Oswald_400Regular });
  const [ latoLoaded ] = useLato({Lato_400Regular })
  
  if(!oswaldLoaded && !latoLoaded){
    return null
  }
  
  // if(!isAuthenticated) return null;

  

  // const [user , setUser] = useState(null)
  
  // useEffect(() => {
  //   // const user = firebase.auth().currentUser;
  //     onAuthStateChanged(FIREBASE_AUTH, (user) => {
  //     // console.log('user', user)
  //     setUser(user)
  //   })
  // }, [])

  return (
     <>
    <ThemeProvider theme={theme}>
      <AuthenticationContextProvider>
      <FavouriteContextProvider>
      <LocationContextProvider>
      <RestaurantsContextProvider>
      <Navigation />
    </RestaurantsContextProvider>
    </LocationContextProvider>
    </FavouriteContextProvider>
    </AuthenticationContextProvider>
    </ThemeProvider>
    </> 
  //   <NavigationContainer>
  //   <Stack.Navigator initialRouteName="Loading">
  //    { user ? (<Stack.Screen name='Inside' component={InsideLayout} options={{ headerShown: false }}/> ) :
  //     (<Stack.Screen name='Login' component={Login} options={{ headerShown: false }}/> )
  //    }
    
  //    </Stack.Navigator>
  //  </NavigationContainer>
  );
}


