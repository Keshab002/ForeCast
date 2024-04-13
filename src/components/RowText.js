import React from 'react';
import { View, Text } from 'react-native';
import { Colors } from 'react-native/Libraries/NewAppScreen';

function RowText(props) {
  const { messageOne, messageTwo, messageOneStyles, messageTwoStyles } = props
  return (
    <View>
      <View style={{alignSelf:"center",marginTop:8}}>
        <Text style={[messageOneStyles,{color:"white",fontFamily:"LexendTera-Regular",fontSize:13}]}>{messageOne}</Text>
      </View>
      <View style={{marginTop:10}}>
        <Text style={[messageTwoStyles,{color:"white",fontFamily:"LexendTera-Regular",fontSize:28}]}>{messageTwo}</Text>
      </View>
    </View>
  );
}

export default RowText;