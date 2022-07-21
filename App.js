import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { Button } from 'react-native'
import { useState } from 'react';
import { ScrollView } from 'react-native';
import { TouchableOpacity } from 'react-native';
import { FAB } from 'react-native-paper';
import { Image } from 'react-native';
import { Homepage } from './Screens/Home';
import { Styles } from './Styles';
import { AppRegistry} from 'react-native';



AppRegistry.registerComponent('main', () => App);


/*TODO: 
Friend add:
  gen link
  friend Requests

Profile:
  Profile Picture
  
Send ehre
Feed
Options
Show Ehre

QR

*/

export default function App() {
  
  return (
    <View><Homepage/></View>
      
  );
}

