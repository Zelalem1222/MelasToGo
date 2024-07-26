import React from 'react'

import { createStackNavigator , TransitionPresets } from "@react-navigation/stack"
import { RestaurantsScreen } from '../../features/restaurants/screens/restaurants.screens';
import { RestaurantDetailScreen } from '../../features/restaurants/screens/restaurantDetail.screen';

const ReastaurantStack = createStackNavigator()

export const RestaurantsNavigator = () => {
    return (
   <ReastaurantStack.Navigator screenOptions={{
         headerShown: false,
      ...TransitionPresets.ModalSlideFromBottomIOS
   }}>
     <ReastaurantStack.Screen 
       name='Reastaurants'
       component={RestaurantsScreen}
     />
      <ReastaurantStack.Screen 
       name='ReastaurantDetail'
       component={RestaurantDetailScreen}
     />
   </ReastaurantStack.Navigator>
    )
}