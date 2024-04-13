import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/Feather'

function IconText(props) {
    const { Iconname, iconcolor, bodyText1, bodyText2, bodyTextStyles } = props
    return (
        <View style={styles.container}>
            <Text style={[styles.textTheme, bodyTextStyles,{color:"#FF814E"}]}>{bodyText1}</Text>
            <Icon name={Iconname} size={50} color={iconcolor} />
            <Text style={[styles.textTheme, bodyTextStyles]}>{bodyText2}</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container:
    {
        alignItems: 'center',
        justifyContent:"space-around"
        // flex:1
    },
    textTheme:
    {
        fontFamily: "LexendTera-Regular",
    }
})
export default IconText;