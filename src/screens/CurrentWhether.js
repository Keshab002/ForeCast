import React from 'react'
import { View, Text, StyleSheet, SafeAreaView, Dimensions } from 'react-native'
import Icon from 'react-native-vector-icons/Feather'
import RowText from '../components/RowText'
import { weatherType } from '../utilities/whetherType'
import LinearGradient from 'react-native-linear-gradient'

const { height, width } = Dimensions.get("screen")

const CurrentWhether = ({ weatherdata }) => {
  const { main: { temp, feels_like, temp_max, temp_min }, weather } = weatherdata
  const weatherCondition = weather[0]?.main
  // const weatherCondition = "Clouds"
  // console.log(weatherCondition)
  return (
    <LinearGradient colors={[weatherType[weatherCondition].gradient2, weatherType[weatherCondition].gradient1]} style={{flex:1}} start={{ x: 0, y: 0 }} end={{ x: 0, y: 1 }}>

      {/* <SafeAreaView style={[styles.wrapper, { backgroundColor: weatherType["Clouds"]?.backgroundColor }]}> */}
        <View style={styles.container}>
          {/* <Icon name={weatherType[weatherCondition].icon} size={100} color="black" /> */}
          <Text style={styles.tempstyles}>{temp + '\u00B0C'}</Text>
          <Text style={styles.feels}> {`Feels like ${feels_like + '\u00B0C'}`} </Text>
        </View>
        <View style={{ marginTop: height * 0.05 }}>
          <Text style={styles.description}>{weather[0].description}</Text>
        </View>
        <View style={styles.highLowWrapper}>
          <View style={[styles.temperature, { backgroundColor: weatherType[weatherCondition].backgroundColor, }]}>
            <RowText messageOne={`High`} messageOneStyles={styles.highLow} messageTwo={`${temp_max + '\u00B0C'}`} messageTwoStyles={styles.highLow} />
          </View>
          <View style={[styles.temperature, { backgroundColor: weatherType[weatherCondition].backgroundColor, }]}>
            <RowText messageOne={`Low`} messageOneStyles={styles.highLow} messageTwo={`${temp_min + '\u00B0C'}`} messageTwoStyles={styles.highLow} />
          </View>
        </View>
        <View>
          <Text style={styles.message}>{weatherType[weatherCondition]?.message}</Text>
        </View>
      {/* </SafeAreaView> */}
    </LinearGradient>
  )
}


const styles = StyleSheet.create({
  wrapper:
  {
    flex: 1,
  },
  container:
  {
    marginTop: height * 0.12,
    marginLeft: width * 0.25,
  },
  tempstyles:
  {
    fontFamily: 'LexendTera-Thin',
    color: "white",
    fontSize: 48,
  },
  feels:
  {
    fontFamily: 'LexendTera-Thin',
    color: 'white',
    fontSize: 17,
    textShadowColor: 'black',
    textShadowOffset: { width: 2, height: 2 },
    textShadowRadius: 10
  },
  highLow:
  {
    color: 'black',
    fontSize: 20
  },
  highLowWrapper:
  {
    flexDirection: 'row',
    justifyContent: "space-around"
  },
  temperature:
  {
    borderRadius: 20,
    height: height * 0.1,
    width: width * 0.4,
    marginTop: height * 0.1,
    alignItems: "center",
    shadowColor: '#171717',
    elevation: 5,
    marginBottom: height * 0.2
  },
  description:
  {
    alignSelf: "center",
    fontSize: 25,
    fontFamily: 'LexendMega-Bold',
    color: "rgba(255,255,255,0.8)",
  },
  message:
  {
    color: "rgba(255,255,255,0.8)",
    alignSelf: "center",
    fontFamily: "LexendTera-Regular",
    textShadowColor: 'black',
    textShadowOffset: { width: 2, height: 2 },
    textShadowRadius: 10,
    textAlign:"center",
    padding:10
  }
})
export default CurrentWhether

