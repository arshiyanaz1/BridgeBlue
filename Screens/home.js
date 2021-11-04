import React from 'react';
import {View, Text,TouchableOpacity,StyleSheet} from 'react-native';
import Colors from '../constants/Colors';

export default function HomeScreen({navigation}) {
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      {/* <Text>Home Screen</Text> */}
      <TouchableOpacity
          style={styles.loginScreenButton}
          onPress={() => navigation.navigate('Detail')}
          underlayColor='#fff'>
          <Text style={styles.loginText}>Get the Data</Text>
 </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  loginScreenButton:{
    paddingTop:10,
    paddingBottom:10,
    paddingHorizontal:40,
    backgroundColor:Colors.primary,
    borderRadius:10,
    borderWidth: 1,
    borderColor: '#fff'
  },
  loginText:{
    color:'#fff',
    textAlign:'center',
    paddingLeft : 10,
    paddingRight : 10,
    fontWeight:'bold',
    fontSize:16
}
})
