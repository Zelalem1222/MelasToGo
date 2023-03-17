import { View , Text } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";

const Stack = createStackNavigator();

export const AccountNavigator = () => {
    return (
        <Stack.Navigator headerMode="none">
        <Stack.Screen name="Main" component={() => {
            return (
                <View>
                    <Text style={{ marginTop: '50px' }}>Account Screen</Text>
                </View>
            );
        }} />
        <Stack.Screen name="Login" component={() => {
            return (
                <View>
                    <Text style={{  }}>Login Screen</Text>
                </View>
            );
        }} />
        <Stack.Screen name="Register" component={RegisterScreen} />
        </Stack.Navigator>
    );
    };