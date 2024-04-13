import React from 'react'
import { View, StyleSheet, Image } from 'react-native'
import CurrentWhether from '../screens/CurrentWhether'
import UpcomingWhether from '../screens/UpcomingWhether'
import City from '../screens/City'
import { NavigationContainer } from '@react-navigation/native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import Icon from 'react-native-vector-icons/Feather'

const Tab = createBottomTabNavigator()

const Tabs = ({ weather }) => {
    // console.log(weather)
    return (
        <Tab.Navigator
            screenOptions={{
                headerShown: false,
                tabBarStyle: { backgroundColor: 'transparent', borderTopWidth: 0, position: "absolute", elevation: 0 , marginBottom:20,},
                tabBarLabelStyle:{fontFamily:"LexendTera-Regular"},  
            }}
        >
            <Tab.Screen name="weather" options={{

                tabBarIcon: ({ focused }) => <Image source={require("../images/Weather.png")} /> 
            }}>{() => <CurrentWhether weatherdata={weather.list[0]} />}</Tab.Screen>

            <Tab.Screen name='UpComing' options={{
                tabBarIcon: ({ focused }) => <Image source={require("../images/upComing.png")} />,
                tabBarStyle: { backgroundColor: "#022E2E",borderTopWidth:0,height:69,paddingBottom:20}
            }}>{() => <UpcomingWhether weatherData={weather.list} />}</Tab.Screen>

            <Tab.Screen name='City' options={{
                tabBarIcon: ({ focused }) => <Image source={require("../images/location.png")} />
            }}>{() => <City weatherDta={weather.city} />}</Tab.Screen>
        </Tab.Navigator>
    )
}

export default Tabs