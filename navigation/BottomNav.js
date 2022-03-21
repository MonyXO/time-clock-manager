import * as React from 'react'

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { NavigationContainer } from '@react-navigation/native'
import Ionicons from 'react-native-vector-icons/Ionicons'

import HomeScreen from '../screens/HomeScreen'
import TeamScreen from '../screens/TeamScreen'

const homeName = 'Home';
const teamName = 'Team';

const Tab = createBottomTabNavigator();

export default function BottomNav() {

    return(
        <NavigationContainer style={{
            shadowOpacity: .30,
            shadowRadius: 2,
            shadowOffset: {height: -1, width: 1},
        }}>
            <Tab.Navigator 
                initialRouteName={homeName} 
                screenOptions={({route}) => ({
                    tabBarStyle: { height: 90},
                    headerShown: false,
                    tabBarIcon: ({focused, color, size}) => {
                        let iconName;
                        let rn = route.name;

                        if (rn === homeName) {
                            iconName = focused ? 'home' : 'home-outline'
                        } else if (rn === teamName) {
                            iconName = focused ? 'list' : 'list-outline'
                        }

                        return <Ionicons name={iconName} size={size} color={color} />
                    },
                })}
                tabBarOptions={{
                    activeTintColor: '#f56423',
                }}
                >
                
                <Tab.Screen name={homeName} component={HomeScreen} />
                <Tab.Screen name={teamName} component={TeamScreen} />

            </Tab.Navigator>
        </NavigationContainer>
    )
}