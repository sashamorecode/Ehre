import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { Button } from 'react-native'
import { useState } from 'react';
import { ScrollView } from 'react-native';
import { TouchableOpacity } from 'react-native';
import { FAB } from 'react-native-paper';
import { Image } from 'react-native';


var secondBackground = '#003087';
var primeTextColor = '#000000';
var primeBackground = '#faf9d2';
var secondTextColor = '#FFFFFF';
var white = '#ffffff';
const n = 8;

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
  const [ehre, setehre] = useState(1);
  //const [fontWeight, setFontWeight] useState('bold')
  
  const incrementCounter = () => setehre(ehre + 1);
  return (
    <View style={styles.container}>
      
      


      <View style={styles.containerTop}>
        <Text style={styles.textTop}>Settings</Text> 
      </View>
      <View>
      <ScrollView>
      <View style={styles.ehreContainer}>
        <Text Text
        style={[
          styles.paragraph,
          {
            fontSize: 55,
            fontWeight: 'bold',
            color: primeTextColor           
          }
        ]}
      > Dein Ehre: {ehre} </Text>
      </View>
      
      <View style={styles.feedContainer}>
        

        <View style = {{paddingBottom: 15,}}><View style={styles.postContainer}><Text > X hat Y 5 Ehre geschickt </Text></View></View>
        <View style = {{paddingBottom: 15}}><View style={styles.postContainer}><Text > FEED </Text></View></View>
        <View style = {{paddingBottom: 15}}><View style={styles.postContainer}><Text > FEED </Text></View></View>
        <View style = {{paddingBottom: 15}}><View style={styles.postContainer}><Text > FEED </Text></View></View>
        <View style = {{paddingBottom: 15}}><View style={styles.postContainer}><Text > FEED </Text></View></View>
        <View style = {{paddingBottom: 15}}><View style={styles.postContainer}><Text > FEED </Text></View></View>
        <View style = {{paddingBottom: 15}}><View style={styles.postContainer}><Text > FEED </Text></View></View>
        <View style = {{paddingBottom: 15}}><View style={styles.postContainer}><Text > FEED </Text></View></View>
        <View style = {{paddingBottom: 15}}><View style={styles.postContainer}><Text > FEED </Text></View></View>
        <View style = {{paddingBottom: 15}}><View style={styles.postContainer}><Text > FEED </Text></View></View>
        <View style = {{paddingBottom: 15}}><View style={styles.postContainer}><Text > FEED </Text></View></View>
        <View style = {{paddingBottom: 15}}><View style={styles.postContainer}><Text > FEED </Text></View></View>
        <View style = {{paddingBottom: 15}}><View style={styles.postContainer}><Text > FEED </Text></View></View>
        <View style = {{paddingBottom: 15}}><View style={styles.postContainer}><Text > FEED </Text></View></View>
        <View style = {{paddingBottom: 15}}><View style={styles.postContainer}><Text > FEED </Text></View></View>
        <View style = {{paddingBottom: 15}}><View style={styles.postContainer}><Text > FEED </Text></View></View>
        <View style = {{paddingBottom: 15}}><View style={styles.postContainer}><Text > FEED </Text></View></View>
        <View style = {{paddingBottom: 15}}><View style={styles.postContainer}><Text > FEED </Text></View></View>
        <View style = {{paddingBottom: 15}}><View style={styles.postContainer}><Text > FEED </Text></View></View>


        
      
        </View> 
      </ScrollView>
      </View>
      
      <View style={{ position: 'absolute', bottom: 10, zIndex: 200, alignContent: 'space-between', alignItems: 'stretch', flexDirection: 'row' }}>

      <TouchableOpacity
         style={styles.buttons}
         onPress={incrementCounter}>
         <Text style={{color:secondTextColor, fontSize: 25, justifyContent: 'center'}}> Get Ehre </Text>
      </TouchableOpacity>
      <TouchableOpacity
         style={styles.buttons}
         onPress={incrementCounter}>
         <Text style={{color:secondTextColor, fontSize: 25, justifyContent: 'center'}}> Get Ehre </Text>
      </TouchableOpacity>
        
        
      </View>

      


      
        
    
    









      
      
      
      
      <StatusBar style="auto" />  
        
    </View>
  );
}



const styles = StyleSheet.create({

  TouchableOpacityStyle:{

    position: 'absolute',
    width: 50,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    right: 30,
    bottom: 30,
  },

  FloatingButtonStyle: {

    resizeMode: 'contain',
    width: 50,
    height: 50,
  },

  fab: {
    position: 'absolute',
    bottom: 5,
    flexDirection: 'row',
    alignItems: 'stretch',
    justifyContent: 'space-between'
    
  },

  
  container: {
    flex: 1,
    backgroundColor: primeTextColor,
    alignItems: 'stretch',
    justifyContent: 'center',
  },
  
  containerTop: {
    backgroundColor: secondBackground,
    alignItems: 'stretch',
    justifyContent: 'center',
    paddingTop: 30,
    position: 'relative',
    
    
    
  },
  textTop: {
    color: secondTextColor,
    fontSize: 20,
  },
  buttons: {
    margin: 10,
    borderRadius: 100,
    justifyContent: 'center',
    flex: 1,
    alignItems: 'center',
    backgroundColor: secondBackground,
    position: 'relative',
    padding: 15,
    

  },

  ehreContainer:{
    paddingTop: 20,
    flex: 1,
    backgroundColor: primeBackground,
    alignItems: 'center',
    justifyContent: 'flex-start',
    flexDirection: 'column',
    fontSize: 300,
    
  },
  feedContainer: {
    backgroundColor: primeBackground,
    paddingRight: 15,
    paddingLeft: 15,
    paddingTop: 10,
    //alignItems: 'center',

    
  },

  postContainer:{
    flexDirection: 'row',
    flex: 1,
    justifyContent: 'center',
    //width: 100,
    padding: 15,
    borderWidth: 2,
    borderRadius: 20,
    color:secondTextColor, 
    fontSize: 25,
    backgroundColor: white
  }

});
