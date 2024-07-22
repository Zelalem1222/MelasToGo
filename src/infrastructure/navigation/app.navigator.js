import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';



import { RestaurantsContextProvider } from '../../services/restaurants/restaurants.context';
import { LocationContextProvider } from '../../services/locations/location.context';
import { FavouriteContextProvider } from '../../services/favourites/favourites.context';

import { SettingsNavigator } from './settings.navigator';
import { RestaurantsNavigator } from './restaurants.navigation';
import { Ionicons } from '@expo/vector-icons'; 

import { MapScreen } from '../../features/map/screens/map.screen';


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
         ),
      headerShown: false   
    }
  }
  
  
  const Tab = createBottomTabNavigator()


export const AppNavigator = () => {
    return (
      <FavouriteContextProvider>
      <LocationContextProvider>
      <RestaurantsContextProvider>
       <Tab.Navigator
       screenOptions={createScreenOptions}
       tabBarOptions={{ 
        activeTintColor: 'tomato',
        inactiveTintColor: 'gray',}}
       >
         <Tab.Screen name="Restaurants" component={RestaurantsNavigator} />
         <Tab.Screen name='Map' component={MapScreen} />
         <Tab.Screen name="Settings" component={SettingsNavigator} />
       </Tab.Navigator>
       </RestaurantsContextProvider>
       </LocationContextProvider>
    </FavouriteContextProvider>
    )
}