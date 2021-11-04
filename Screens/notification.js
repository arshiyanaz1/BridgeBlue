import React from 'react';
import {View, Text,Button,StatusBar} from 'react-native';
import Colors from '../constants/Colors';


export default function NotificationScreen({navigation}) {
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
       <StatusBar backgroundColor={Colors.primary} />
      <Text style={{color:Colors.primary}}>Notifications Screen</Text>
    </View>
  );
}