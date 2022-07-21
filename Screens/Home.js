import { View, TouchableOpacity, Text, ScrollView} from "react-native"
import { StylesE, ColorsE } from "../StylesnColors"
import { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';



const Homepage = ({ navigation }) => {
    const [ehre, setehre] = useState(1);
  
    const incrementCounter = () => setehre(ehre + 1);

   


    const FakePosts = ["Feddddsed", "Ashaoihg", "hagsoahogahsio"];
    for (let i = 0; i<70; i++){
      FakePosts.push("Post")
    }


    return (
    <View style={StylesE.container}>
      
      


      <View style={StylesE.containerTop}>
        <Text style={StylesE.textTop}>Settings</Text> 
      </View>
      <View>
      <ScrollView>
      <View style={StylesE.ehreContainer}>
        <Text Text
        style={[
            StylesE.paragraph,
          {
            fontSize: 55,
            fontWeight: 'bold',
            color: ColorsE.primeTextColor           
          }
        ]}
      > Dein Ehre: {ehre} </Text>
      </View>
      
      <View style={StylesE.feedContainer}>



      {
      FakePosts.map((post)=> (
      
        <View style={StylesE.postBox}>
          <View style={StylesE.postContainer} id={post.id}><Text > {post} </Text></View>
        </View>
      
      ))
      }
        
      
    </View>  
    </ScrollView>
      </View>
      
      <View style={{ position: 'absolute', bottom: 10, zIndex: 200, flexDirection: "row", justifyContent: "space-evenly"}}>

      
      <TouchableOpacity
         style={StylesE.buttons}
         onPress={()=> navigation.navigate('AddFriendPage')}>
         <Text style={{color: ColorsE.secondTextColor, fontSize: 25, justifyContent: 'center'}}> Add Friends </Text>
      </TouchableOpacity>
      
      
      <TouchableOpacity
         style={StylesE.buttons}
         onPress={incrementCounter}>
         <Text style={{color: ColorsE.secondTextColor, fontSize: 25, justifyContent: 'center'}}> Send </Text>
      </TouchableOpacity>
    
        
        
      </View>
      
      
      <StatusBar style="auto" />  
        
    </View>
    );
}

export {Homepage};