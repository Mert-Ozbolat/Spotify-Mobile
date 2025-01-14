import { View, Text } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import LoginScreen from '../screens/LoginScreen'
import HomeScreen from '../screens/HomeScreen'
import SongScreen from '../screens/SongScreen'
import ProfileScreeen from '../screens/ProfileScreeen'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import Entypo from 'react-native-vector-icons/Entypo'
import AntDesign from 'react-native-vector-icons/AntDesign';
import Ionicons from 'react-native-vector-icons/Ionicons';
import SongInfoScreen from '../screens/SongInfoScreen'


const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator()


const BottomTabs = () => {
    return (
        <Tab.Navigator
            screenOptions={{
                tabBarStyle: {
                    backgroundColor: '#131624',
                    shadowOpacity: 0.3,
                    shadowRadius: 4,
                    shadowOffset: {
                        width: 0,
                        height: -10,
                    },
                    position: 'absolute',
                    bottom: 0,
                    left: 0,
                    right: 0,
                    height: 60,
                    borderWidth: 0,
                }
            }}
        >
            <Tab.Screen
                options={{
                    headerShown: false,
                    tabBarLabel: 'Home',
                    tabBarLabelStyle: { color: 'white', fontSize: 13, fontWeight: '500' },
                    tabBarIcon: ({ focused }) =>
                        focused ? (
                            <Entypo name="home" color="white" size={24} />
                        ) : (
                            <AntDesign name="home" color="white" size={24} />
                        ),
                }}
                name='Home'
                component={HomeScreen}
            />

            <Tab.Screen
                options={{
                    headerShown: false,
                    tabBarLabel: 'Profile',
                    tabBarLabelStyle: { color: 'white', fontSize: 13, fontWeight: '500' },
                    tabBarIcon: ({ focused }) =>
                        focused ? (
                            <Ionicons name="person" color="white" size={24} />
                        ) : (
                            <Ionicons name="person-outline" color="white" size={24} />
                        ),
                }}
                name='Profile' component={ProfileScreeen} />
        </Tab.Navigator>
    )
}



const Routes = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator
                screenOptions={{
                    headerShown: false,
                }}
            >
                <Stack.Screen name='Login' component={LoginScreen} />
                <Stack.Screen name='Main' component={BottomTabs} />
                <Stack.Screen name='Songs' component={SongScreen} />
                <Stack.Screen name='Info' component={SongInfoScreen} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default Routes