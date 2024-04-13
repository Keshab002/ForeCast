import React from "react"
import { StyleSheet,  SafeAreaView, FlatList, View, Text, StatusBar, ImageBackground } from "react-native"
import ListItem from "../components/ListItem"


const UpcomingWhether = ({weatherData}) => {
    // console.log(weatherData)
    const renderItem = ({ item }) => <ListItem condition={item.weather[0].main} dt_txt={item.dt_txt} min={item.main.temp_min} max={item.main.temp_max} />

    return (
        <SafeAreaView style={styles.container}>
            {/* <StatusBar translucent backgroundColor={'royalblue'} /> */}
                <View style={{marginVertical: 30,marginLeft:20}}>
                    <Text style={{color:"white",fontFamily:"LexendMega-Bold",fontSize:20}}>Upcoming Weather</Text>
                </View>
            
                <FlatList
                    data={weatherData}
                    renderItem={renderItem}
                    keyExtractor={(item) => item.dt_txt}
                />
    
        </SafeAreaView>
    )
}

const styles = StyleSheet.create(
    {
        container:
        {
            flex: 1,
            backgroundColor: '#022E2E',
            // marginTop: StatusBar.currentHeight || 0
        },
        image:
        {
            flex:1
        }
    }
)

export default UpcomingWhether