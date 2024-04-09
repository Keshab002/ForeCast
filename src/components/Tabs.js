import React from 'react'
import { View, StyleSheet } from 'react-native'
import CurrentWhether from '../screens/CurrentWhether'
import UpcomingWhether from '../screens/UpcomingWhether'
import City from '../screens/City'
import { NavigationContainer } from '@react-navigation/native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import Icon from 'react-native-vector-icons/Feather'

const Tab = createBottomTabNavigator()

const Tabs = ({weather}) => {
    // console.log(weather)
    return (
        <Tab.Navigator
            screenOptions={{
                tabBarActiveTintColor: "tomato",
                tabBarInactiveTintColor: "grey",
                tabBarStyle:
                {
                    backgroundColor: 'lightblue'
                },
                headerStyle:
                {
                    backgroundColor: 'lightblue'
                },
                headerTitleStyle:
                {
                    fontWeight: 'bold',
                    fontSize: 25,
                    color: 'tomato'
                }

            }}
        >
            <Tab.Screen name='Current' options={{
                tabBarIcon: ({ focused }) => <Icon name="droplet" size={25} color={focused ? 'tomato' : 'black'} />
            }}>{() => <CurrentWhether weatherdata={weather.list[0]} />}</Tab.Screen>
            <Tab.Screen name='UpComing'  options={{
                tabBarIcon: ({ focused }) => <Icon name="clock" size={25} color={focused ? 'tomato' : 'black'} />
            }}>{() => <UpcomingWhether weatherData={weather.list} />}</Tab.Screen>
            <Tab.Screen name='City'  options={{
                tabBarIcon: ({ focused }) => <Icon name="home" size={25} color={focused ? 'tomato' : 'black'} />
            }}>{()=> <City weatherDta={weather.city}/>}</Tab.Screen>
        </Tab.Navigator>
    )
}

export default Tabs