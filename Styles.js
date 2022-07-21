import { StyleSheet } from "react-native";

export const Colors = {
    secondBackground: '#003087',
    primeTextColor: '#000000',
    primeBackground: '#faf9d2',
    secondTextColor: '#FFFFFF',
    white: '#ffffff'
}



export const Styles = StyleSheet.create({

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
      backgroundColor: Colors.primeTextColor,
      alignItems: 'stretch',
      justifyContent: 'center',
    },
    
    containerTop: {
  
      backgroundColor: Colors.secondBackground,
      alignItems: 'stretch',
      justifyContent: 'center',
      paddingTop: 100,
      position: 'relative',
      
      
      
    },
    textTop: {
      color: Colors.secondTextColor,
      fontSize: 20,
    },
    buttons: {
      margin: 10,
      borderRadius: 100,
      justifyContent: 'center',
      flex: 1,
      alignItems: 'center',
      backgroundColor: Colors.secondBackground,
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