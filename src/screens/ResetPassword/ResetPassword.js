import { View, Text, StyleSheet } from 'react-native'
import React, { useState } from 'react'
import CustomInput from '../../components/CustomInput';
import CustomButton from '../../components/CustomButton';
import {useNavigation} from '@react-navigation/native'
import {useForm} from 'react-hook-form'

const ResetPassword = () => {

  const {control ,handleSubmit,formState:{errors},} = useForm();

const navigation = useNavigation();

const onSignInPressed = () => {
    navigation.navigate('Sign Up');
  }

  const onResetPressed = () => {
    navigation.navigate('Sign In');
  }


  return (
    <View style={styles.root}>
      <Text style={styles.title}>Reset Password</Text>

      <CustomInput 
      placeholder="UserID/Email-Id"
       name="EmailId"
       control = {control}
      />

     <CustomInput 
      placeholder="Sequrity Code"
       name="code"
       control = {control}
       />

      <CustomInput 
      placeholder=" New Password"
       name ="new password"
       control = {control}
       secureTextEntry = {true}
       />

       <CustomInput 
      placeholder="Confirm Password"
       name = "Confirm password"
       control={control}
       secureTextEntry = {true}
       />

<CustomButton
 text="Reset Password"
  onPress= {handleSubmit(onResetPressed)}/>
    
    <CustomButton
        text="Create an Account"
         onPress= {onSignInPressed}
         type = "TERTIARY"
         />

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
export default ResetPassword