import React from 'react';
import { View,Text, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/Feather'

function ErrorItem(props) {
    return ( 
        <View style={styles.container }>
            <Text style={styles.errorMessage}>
                Sorry something went wrong
            </Text>
            <Icon name='frown' size={100} color='white' />
        </View>
    );
}

const styles = StyleSheet.create({
    container:
    {
        flex: 1,
        justifyContent: 'center',
        alignItems:'center',
        backgroundColor:'red'
    },
    errorMessage:
    {
        fontSize: 50,
        color: 'white',
        marginHorizontal: 10,
        textAlign: 'center'
    }
})

export default ErrorItem;