import React from 'react';
import {View, Text,Button} from 'react-native';
import Colors from '../constants/Colors';


export default function SearchScreen({navigation}) {
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text style={{color:Colors.primary}} >Search Screen</Text>
    </View>
  );
}