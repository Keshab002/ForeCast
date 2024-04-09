import React, { useEffect, useState } from 'react'
import { ActivityIndicator, View, StyleSheet, PermissionsAndroid } from 'react-native'
import { NavigationContainer } from '@react-navigation/native'
import Tabs from './src/components/Tabs'
import { UseGetWhether } from './src/hooks/usegetwhether';
import ErrorItem from './src/components/ErrorItem';


const App = () => {

  const [loading, error, weather] = UseGetWhether()
  // console.log( weather)

  if (weather && weather.list && !loading) {
    return (
      <NavigationContainer>
        <Tabs weather={weather} />
      </NavigationContainer>
    )
  }

  return (
    <View style={styles.container}>
      {error ? (<ErrorItem />) : (
        <ActivityIndicator size={'large'} color={'blue'} />)}
    </View>
  )


}

const styles = StyleSheet.create({
  container:
  {
    justifyContent: 'center',
    flex: 1
  }
})

export default App