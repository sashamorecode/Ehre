import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { Button } from 'react-native'
import { useState } from 'react';
import { ScrollView } from 'react-native';
import { TouchableOpacity } from 'react-native';
import { FAB } from 'react-native-paper';
import { Image } from 'react-native';
import { Homepage } from './Screens/Home';
import { AddFriendsScreen } from "./Screens/AddFriends"
import { LoginScreen  } from "./Screens/login"
import { AppRegistry} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack'; 
import { Header } from 'react-native/Libraries/NewAppScreen';



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

  const Stack = createNativeStackNavigator();
  
  
  return (
   
      <NavigationContainer>
        <Stack.Navigator screenOptions={{
          headerShown: false,
          initialRouteName: 'login'
        
        }}>
          
          <Stack.Screen name="login" component={LoginScreen} />
          <Stack.Screen name="Home" component={Homepage} />
          <Stack.Screen name="AddFriendPage" component={AddFriendsScreen} />
          
          
        </Stack.Navigator>
      </NavigationContainer>
    );
      
  
}

