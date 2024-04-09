import React from 'react'
import { View, Text, StyleSheet, SafeAreaView } from 'react-native'
import Icon from 'react-native-vector-icons/Feather'
import RowText from '../components/RowText'
import { weatherType } from '../utilities/whetherType'



const CurrentWhether = ({weatherdata}) => {
  
  const {main : {temp, feels_like, temp_max, temp_min}, weather} = weatherdata
  const weatherCondition = weather[0]?.main
  console.log(weatherCondition)
  return (
    <SafeAreaView style={[styles.wrapper,{backgroundColor: weatherType[weatherCondition]?.backgroundColor}]}>
      <View style={styles.container}>
        <Icon name={weatherType[weatherCondition].icon} size={100} color="black" />
        <Text style={styles.tempstyles}>{temp+'\u00B0C'}</Text>
        <Text style={styles.feels}> {`Feels like ${feels_like+'\u00B0C'}`} </Text>
        <RowText messageOne={`High: ${temp_max+'\u00B0C'} `} messageTwo={` Low: ${temp_min+'\u00B0C'}`} ContainerStyles={styles.highLowWrapper} messageOneStyles={styles.highLow} messageTwoStyles={styles.highLow} />
      </View>
        <RowText messageOne={weather[0].description} messageTwo={weatherType[weatherCondition].message} ContainerStyles={styles.bodyWrapper} messageOneStyles={styles.description} messageTwoStyles={styles.message} />
    </SafeAreaView>
  )
}


const styles = StyleSheet.create({
  wrapper:
  {
    flex: 1,
  },
  container:
  {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  tempstyles:
  {
    color: "black",
    fontSize: 48,
  },
  feels:
  {
    color: 'black',
    fontSize: 30,
  },
  highLow:
  {
    color: 'black',
    fontSize: 20
  },
  highLowWrapper:
  {
    flexDirection: 'row'
  },
  bodyWrapper:
  {
    justifyContent: 'flex-end',
    alignItems: 'flex-start',
    paddingLeft: 25,
    marginBottom: 40,
  },
  description:
  {
    fontSize: 43
  },
  message:
  {
    fontSize: 25
  }
})
export default CurrentWhether

