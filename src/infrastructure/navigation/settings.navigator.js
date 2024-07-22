import React from "react";

import { createStackNavigator, CardStyleInterpolators } from "@react-navigation/stack";
import { SettingScreen } from "../../features/setting/screens/settings.screens";

const SettingsStack = createStackNavigator();

export const SettingsNavigator = ({route , navigation})=> {
    return (
        <SettingsStack.Navigator
        headerMode="Screen"
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
             component={() => null}
            />
        </SettingsStack.Navigator>
    )
}