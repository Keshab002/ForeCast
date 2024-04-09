import React from 'react';
import { View , Text, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/Feather'

function IconText(props) {
    const {Iconname, iconcolor, bodyText, bodyTextStyles} = props
    return (
        <View style={styles.container}>
            <Icon name={Iconname} size={50} color={iconcolor} />
            <Text style={[styles.textTheme, bodyTextStyles]}>{bodyText}</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container:
    {
        alignItems:'center'
    },
    textTheme:
    {
        fontWeight: 'bold'
    }
})
export default IconText;