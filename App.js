
import { ThemeProvider } from 'styled-components/native';

import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import { Text } from 'react-native';

import { SafeArea } from './src/components/utility/safeArea.component';
import { RestaurantsContextProvider } from './src/services/restaurants/restaurants.context';
import { LocationContextProvider } from './src/services/locations/location.context';

import { useFonts as useOswald, Oswald_400Regular } from '@expo-google-fonts/oswald';
import { useFonts as useLato, Lato_400Regular } from '@expo-google-fonts/lato';
import { RestaurantsScreen } from './src/features/restaurants/screens/restaurants.screens';
import { theme } from './src/infrastructure/theme';

import { Ionicons } from '@expo/vector-icons'; 




const TAB_ICON = {
  Restaurants: 'md-restaurant',
  Map: 'md-map',
  Settings: 'md-settings'
}

const createScreenOptions = ({route}) => {
  let iconName = TAB_ICON[route.name]
  return {
    tabBarIcon: ({size , color}) => (
       <Ionicons name={iconName} size={size} color={color} />
    )
  }
}

const MapScreen = () => {
  return (
    <SafeArea style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Map!</Text>
    </SafeArea>
  )
}

const SettingScreen = () => {
  return (
    <SafeArea style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Setting!</Text>
    </SafeArea>
  )
}

const Tab = createBottomTabNavigator()


export default function App() {

  const [oswaldLoaded] = useOswald({ Oswald_400Regular });
  const [ latoLoaded ] = useLato({Lato_400Regular })
  
  if(!oswaldLoaded && !latoLoaded){
    return null
  }

  return (
    <>
    <ThemeProvider theme={theme}>
      <LocationContextProvider>
      <RestaurantsContextProvider>
    <NavigationContainer>
       <Tab.Navigator
       screenOptions={createScreenOptions}
       tabBarOptions={{ 
        activeTintColor: 'tomato',
        inactiveTintColor: 'gray',}}
       >
         <Tab.Screen name="Restaurants" component={RestaurantsScreen} />
         <Tab.Screen name='Map' component={MapScreen} />
         <Tab.Screen name="Settings" component={SettingScreen} />
       </Tab.Navigator>
    </NavigationContainer>
    </RestaurantsContextProvider>
    </LocationContextProvider>
    </ThemeProvider>
    </>
  );
}

