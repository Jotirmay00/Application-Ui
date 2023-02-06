import { View, Text,StyleSheet,BackHandler, } from 'react-native'
import React from 'react'
import CustomButton from '../../components/CustomButton'
import Auth from 'aws-amplify'

const HomeScreen = () => {

  

const onCallPressed = () =>{

}

const onReceivePressed = () =>{

}

const Logout =() => {
  Auth.signOut();
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


      <Text
        onPress={Logout}
        style={{
          alignSelf : 'center',
          width: '100%',
          textAlign: 'center',
          color: 'red',
          marginTop: 'auto',
          marginVertical: 20,
          fontSize: 20,
        }}>
        Log out
      </Text>
    
    </View>

  )
}

const styles = StyleSheet.create(
    {
        root :{
          flex: 1,
            alignItems: 'center',
            padding : 20,
            flexDirection : 'column',
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