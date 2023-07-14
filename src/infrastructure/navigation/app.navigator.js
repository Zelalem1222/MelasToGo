
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import { Text } from 'react-native';

import { SafeArea } from '../../components/utility/safeArea.component'
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


  const SettingScreen = () => {
    return (
      <SafeArea style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>Setting!</Text>
      </SafeArea>
    )
  }

export const AppNavigator = () => {
    return (
       <Tab.Navigator
       screenOptions={createScreenOptions}
       tabBarOptions={{ 
        activeTintColor: 'tomato',
        inactiveTintColor: 'gray',}}
       >
         <Tab.Screen name="Restaurants" component={RestaurantsNavigator} />
         <Tab.Screen name='Map' component={MapScreen} />
         <Tab.Screen name="Settings" component={SettingScreen} />
       </Tab.Navigator>
    )
}