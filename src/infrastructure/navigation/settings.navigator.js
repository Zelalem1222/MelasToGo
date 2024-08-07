import React from "react";

import { createStackNavigator, CardStyleInterpolators } from "@react-navigation/stack";
import { SettingScreen } from "../../features/setting/screens/settings.screens";
import { FavouritesScreen } from "../../features/setting/screens/favourites.screens";
import { CameraScreen } from "../../features/setting/screens/camera.screens";
const SettingsStack = createStackNavigator();

export const SettingsNavigator = ({route , navigation})=> {
    return (
        <SettingsStack.Navigator
        
        screenOptions={{
            CardStyleInterpolators: CardStyleInterpolators.forHorizontalIOS
        }}
        >
            <SettingsStack.Screen 
            options={{
                header: () => null
            }}
             name="Settings"
             component={SettingScreen}
            />
            <SettingsStack.Screen 
             name="Favourites"
             component={FavouritesScreen}
            />
            <SettingsStack.Screen 
             name="Camera"
             component={CameraScreen}
            />
        </SettingsStack.Navigator>
    )
}