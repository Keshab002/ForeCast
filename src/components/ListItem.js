import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/Feather'
import { weatherType } from '../utilities/whetherType';
import moment from 'moment';

function ListItem(props) {

    const { dt_txt, max, min, condition } = props
    return (
        <View style={styles.item}>
            <Icon name={weatherType[condition]?.icon} size={50} color={'white'} />
            <View style={styles.dateTextWrapper}>
                <Text style={styles.date}>{moment(dt_txt).format('dddd')}</Text>
                <Text style={styles.date}>{moment(dt_txt).format('h:mm:ss a')}</Text>
            </View>
            <Text style={styles.temp}>{`${Math.round(min)+'\u00B0C'}/${Math.round(max) + '\u00B0C'}`}</Text>
        </View>

    )

}

const styles = StyleSheet.create({
    item:
    {
        padding: 20,
        marginVertical: 8,
        marginHorizontal: 16,
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        borderBottomWidth: 2,
        borderColor:"#03867A",
        backgroundColor: 'transparent'
    },
    temp:
    {
        color: 'white',
        fontSize: 20
    },
    date:
    {
        color: 'white',
        fontSize: 15
    },
    dateTextWrapper:
    {
        flexDirection: 'column'
    }
})

export default ListItem;