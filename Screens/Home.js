import { View, TouchableOpacity} from "react-native"
import { Styles, Colors } from "../Styles"
import { useState } from 'react';

export const Homepage = () => {
    const [ehre, setehre] = useState(1);
  
    const incrementCounter = () => setehre(ehre + 1);


    return (
    <View style={Styles.container}>
      
      


      <View style={Styles.containerTop}>
        <Text style={Styles.textTop}>Settings</Text> 
      </View>
      <View>
      <ScrollView>
      <View style={Styles.ehreContainer}>
        <Text Text
        style={[
            Styles.paragraph,
          {
            fontSize: 55,
            fontWeight: 'bold',
            color: Colors.primeTextColor           
          }
        ]}
      > Dein Ehre: {ehre} </Text>
      </View>
      
      <View style={Styles.feedContainer}>
        

        <View style={Styles.postContainer}><Text > X hat Y 5 Ehre geschickt </Text></View>
        

        
      
    </View>  
    </ScrollView>
      </View>
      
      <View style={{ position: 'absolute', bottom: 10, zIndex: 200, alignContent: 'space-between', alignItems: 'stretch', flexDirection: 'row' }}>

      <TouchableOpacity
         style={Styles.buttons}
         onPress={incrementCounter}>
         <Text style={{color: Colors.secondTextColor, fontSize: 25, justifyContent: 'center'}}> Get Ehre </Text>
      </TouchableOpacity>
      <TouchableOpacity
         style={Styles.buttons}
         onPress={incrementCounter}>
         <Text style={{color: Colors.secondTextColor, fontSize: 25, justifyContent: 'center'}}> Get Ehre </Text>
      </TouchableOpacity>
        
        
      </View>
      
      
      <StatusBar style="auto" />  
        
    </View>
    );
}