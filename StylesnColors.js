import { StyleSheet } from "react-native";


const ColorsE = {
    secondBackground: '#003087',
    primeTextColor: '#000000',
    primeBackground: '#faf9d2',
    secondTextColor: '#FFFFFF',
    white: '#ffffff',
    black: '#000000'
}



const StylesE = StyleSheet.create({

    simpleText:{
      textAlign: 'center',
      color: ColorsE.black,
      fontSize: 24,
      fontWeight: '500'
    },

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
      backgroundColor: ColorsE.primeTextColor,
      alignItems: 'stretch',
      justifyContent: 'center',
    },
    
    containerTop: {
  
      backgroundColor: ColorsE.secondBackground,
      alignItems: 'stretch',
      justifyContent: 'center',
      paddingTop: 100,
      position: 'relative',
      
      
      
    },
    textTop: {
      color: ColorsE.secondTextColor,
      fontSize: 20,
    },
    buttons: {
      borderRadius: 100,
      //justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: ColorsE.secondBackground,
      //position: 'relative',
      padding: 15,
      transform: [{ scale: 0.8 }],
      width: 150,
      flex: 1
      
  
    },
  
    ehreContainer:{
      paddingTop: 20,
      flex: 1,
      alignItems: 'center',
      justifyContent: 'flex-start',
      flexDirection: 'column',
      fontSize: 300,
      
    },
    feedContainer: {
      paddingRight: 15,
      paddingLeft: 15,
      paddingTop: 10,
      //alignItems: 'center',
  
      
    },
  
    postContainer:{
      flexDirection: 'column',
      flex: 1,
      justifyContent: 'center',
      //width: 100,
      height: 60,
      borderWidth: 2.2,
      borderRadius: 12,
      color: ColorsE.secondTextColor, 
      fontSize: 25,
      backgroundColor: ColorsE.white,
      
    },
    postBox:{
      paddingBottom: 8
    },

    backgroundHomeContainer:{
      flex: 1
    },

    backgroundHome:{
      flex: 1,
      justifyContent: "center"
    }
  
  });


export{StylesE};
export{ColorsE};