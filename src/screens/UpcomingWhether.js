import React from "react"
import { StyleSheet,  SafeAreaView, FlatList, StatusBar, ImageBackground } from "react-native"
import ListItem from "../components/ListItem"


const UpcomingWhether = ({weatherData}) => {
    // console.log(weatherData)
    const renderItem = ({ item }) => <ListItem condition={item.weather[0].main} dt_txt={item.dt_txt} min={item.main.temp_min} max={item.main.temp_max} />

    return (
        <SafeAreaView style={styles.container}>
            {/* <StatusBar translucent backgroundColor={'royalblue'} /> */}
            <ImageBackground style={styles.image} source={require('../images/dark.jpg')}>
                <FlatList
                    data={weatherData}
                    renderItem={renderItem}
                    keyExtractor={(item) => item.dt_txt}
                />
            </ImageBackground>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create(
    {
        container:
        {
            flex: 1,
            backgroundColor: 'royalblue',
            // marginTop: StatusBar.currentHeight || 0
        },
        image:
        {
            flex:1
        }
    }
)

export default UpcomingWhether