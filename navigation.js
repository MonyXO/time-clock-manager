import React from "react";
import { View, Text } from 'react-native'
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import HomeScreen from "./screens/HomeScreen";
import TeamScreen from "./screens/TeamScreen";

const Stack = createStackNavigator();

const screenOptions = {
    headerShown: false,
}

const SignedInStack = () => (
    <NavigationContainer>
        <Stack.Navigator 
            initialRouteName="HomeScreen" 
            screenOptions={screenOptions}
        >
            <Stack.Screen name='HomeScreen' component={HomeScreen} />
            <Stack.Screen name='TeamScreen' component={TeamScreen} />
        </Stack.Navigator>
    </NavigationContainer>
)

export default SignedInStack;