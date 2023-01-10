import React from 'react'
import { Text } from 'react-native'
import { createStackNavigator } from "@react-navigation/stack"
import { RestaurantsScreen } from '../../features/restaurants/screens/restaurants.screens';
const ReastaurantStack = createStackNavigator()

export const RestaurantsNavigator = () => {
    return (
   <ReastaurantStack.Navigator headerMode='none'>
     <ReastaurantStack.Screen 
       name='Reastaurants'
       component={RestaurantsScreen}
     />
      <ReastaurantStack.Screen 
       name='ReastaurantDetail'
       component={() => <Text>Resataurant Detail</Text>}
     />
   </ReastaurantStack.Navigator>
    )
}