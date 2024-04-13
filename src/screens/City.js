import React from 'react';
import { SafeAreaView, Text, StyleSheet, ImageBackground, View, Dimensions } from 'react-native';
import IconText from '../components/IconText';
import moment from 'moment';

const { height, width } = Dimensions.get("screen")

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
            <View style={{ borderBottomWidth: 1, borderColor: "#03867A", marginTop: "25%", marginHorizontal: "10%", paddingBottom: "5%" }}>
                <Text style={[styles.cityName, styles.cityText]}>{name}</Text>
            </View>
            {/* <View style={{borderBottomWidth:1, borderColor:"#03867A"}}>
                <Text style={[styles.cityName, styles.cityText]}>{country}</Text>
            </View> */}
            <View style={styles.populationWrapper}>
                <IconText Iconname={'user'} iconcolor={'white'} bodyText2={`Population : ${population}`} bodyTextStyles={styles.populationText} />
            </View>
            <View style={{ flexDirection: "row", justifyContent: "space-around" }}>
                <View style={[styles.risesetWrappper, styles.shadowEffect]}>
                    <IconText bodyText1={"Sunrise"} Iconname={'sunrise'} iconcolor={'white'} bodyText2={moment.unix(sunrise).format('h:mm a')} bodyTextStyles={styles.riseSetText} />
                </View>
                <View style={[styles.risesetWrappper, styles.shadowEffect]}>
                    <IconText bodyText1={"Sunset"} Iconname={'sunset'} iconcolor={'white'} bodyText2={moment.unix(sunset).format('h:mm a')} bodyTextStyles={styles.riseSetText} />
                </View>
            </View>

        </SafeAreaView>

    );
}

const styles = StyleSheet.create({
    container:
    {
        flex: 1,
        backgroundColor: "#022E2E"
    },
    imageLayout:
    {
        flex: 1
    },
    cityName:
    {
        fontSize: 30,
        textAlign: "justify"
    },
    countyName:
    {
        fontSize: 30,
    },
    cityText:
    {
        justifyContent: "center",
        alignSelf: "center",
        // fontWeight: "bold",
        fontFamily: "LexendTera-Regular",
        color: "#FF814E"
    },
    populationWrapper:
    {
        justifyContent: 'center',
    },
    populationText:
    {
        fontSize: 20,
        marginLeft: 7.5,
        color: 'white',
        marginBottom:"15%"
        // fontWeight: 'bold',
    },
    risesetWrappper:
    {
        backgroundColor: "rgba(3,134,122,0.6)",
        borderRadius: 20,
        justifyContent: 'space-around',
        marginTop: 30,
        height: height * 0.2,
        aspectRatio: 1,
    },
    shadowEffect:
    {
        shadowColor: '#171717',
        elevation: 10,
    },
    riseSetText:
    {
        fontSize: 20,
        color: "white",
    },

})

export default City;