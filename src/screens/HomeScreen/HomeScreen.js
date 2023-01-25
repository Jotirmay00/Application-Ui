import { View, Text,StyleSheet,BackHandler, } from 'react-native'
import React from 'react'
import CustomButton from '../../components/CustomButton'

const HomeScreen = () => {

  

const onCallPressed = () =>{

}

const onReceivePressed = () =>{

}

const Logout =() => {
  BackHandler.exitApp();
}

  return (
    <View style={styles.root}>
      <Text style={styles.title}>Home</Text>

      <CustomButton 
      text="Call"
      type='SECONDARY'
       onPress= {onCallPressed}/>

    <CustomButton 
      text="Receive"
      type='SECONDARY'
       onPress= {onReceivePressed}/>


     <CustomButton 
      text="Log Out"
      type='TERTIARY'
       onPress= {Logout}/>
    
    </View>

 

  )
}

const styles = StyleSheet.create(
    {
        root :{
            alignItems: 'center',
            padding : 20,
            
          },
      
          title :{
              fontSize : 24,
              fontWeight : 'bold',
              color : '#003399',
              margin : 10,
          },
          
         
    }
)

export default HomeScreen