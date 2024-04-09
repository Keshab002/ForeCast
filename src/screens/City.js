import React from 'react';
import { SafeAreaView, Text, StyleSheet, ImageBackground, View } from 'react-native';
import IconText from '../components/IconText';
import moment from 'moment';

function City({ weatherDta }) {
    console.log(weatherDta.name)
    const { name, country, population, sunset, sunrise } = weatherDta
    console.log("Sunrise:", sunrise);
    console.log("Sunset:", sunset);

    const formattedSunrise = moment.unix(sunrise).format('h:mm:ss a')
    const formattedSunset = moment.unix(sunset).format('h:mm:ss a')

    console.log("Formatted Sunrise:", formattedSunrise);
    console.log("Formatted Sunset:", formattedSunset);
    return (
        <SafeAreaView style={styles.container}>
            {/* <StatusBar translucent backgroundColor={'transparent'} /> */}
            <ImageBackground source={require('../images/city.jpg')} style={styles.imageLayout} >
                <Text style={[styles.cityName, styles.cityText]}>{name}</Text>
                <Text style={[styles.countyName, styles.cityText]}>{country}</Text>
                <View style={[styles.populationWrapper, styles.rowLayout]}>
                    <IconText Iconname={'user'} iconcolor={'red'} bodyText={`Population : ${population}`} bodyTextStyles={styles.populationText} />
                </View>
                <View style={[styles.risesetWrappper, styles.rowLayout]}>
                    <IconText Iconname={'sunrise'} iconcolor={'white'} bodyText={moment.unix(sunrise).format('h:mm:ss a')} bodyTextStyles={styles.riseSetText} />
                    <IconText Iconname={'sunset'} iconcolor={'white'} bodyText={moment.unix(sunset).format('h:mm:ss a')} bodyTextStyles={styles.riseSetText} />
                </View>
            </ImageBackground>

        </SafeAreaView>

    );
}

const styles = StyleSheet.create({
    container:
    {
        flex: 1,
    },
    imageLayout:
    {
        flex: 1
    },
    cityName:
    {
        fontSize: 40,
    },
    countyName:
    {
        fontSize: 30,
    },
    cityText:
    {
        justifyContent: "center",
        alignSelf: "center",
        fontWeight: "bold",
        color: "orange"
    },
    populationWrapper:
    {
        justifyContent: 'center',
        marginTop: 30
    },
    populationText:
    {
        fontSize: 25,
        marginLeft: 7.5,
        color: 'red',
        // fontWeight: 'bold',
    },
    risesetWrappper:
    {
        justifyContent: 'space-around',
        marginTop: 30
    },
    riseSetText:
    {
        fontSize: 20,
        color: "white",
    },
    rowLayout:
    {
        flexDirection: 'row',
        alignItems: 'center',
    }
})

export default City;