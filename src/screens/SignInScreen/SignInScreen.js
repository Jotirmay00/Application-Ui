import { View, Text,Button, StyleSheet, Image,useWindowDimensions,ScrollView } from 'react-native'
import React,{useState} from 'react'
import Logo from '../../assets/images/Logo.png'
import CustomInput from '../../components/CustomInput'
import CustomButton from '../../components/CustomButton'
import {useNavigation} from '@react-navigation/native'
import {useForm,Controller} from 'react-hook-form'


const SignInScreen = () => {
const {control ,handleSubmit,} = useForm();


  const {height} = useWindowDimensions(); 

  const navigation = useNavigation();

  const onSignInPressed = (data) => {

    navigation.navigate('Home');
  }

  const onForgotPasswordPressed = () => {
    navigation.navigate('Reset Password')
  }

  const onSignUpPressed = () => {
    navigation.navigate('Sign Up');
  }

  const EMAIL_REGEX =
  /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;


  return (
    <ScrollView showsVerticalScrollIndicator={false}>
    <View style={styles.root}>
      
      <Image source = {Logo}  style = {[styles.logo, {height : height * 0.3 } ]} resizeMode="contain"/>
      
      <CustomInput
      name="EmailID" 
      placeholder="Email ID"
       control={control}
       rules={{
        required: 'Email is required',
        pattern: {value: EMAIL_REGEX, message: 'Email is invalid'},
      }}
       />

      <CustomInput 
      name="Password"
      placeholder="Password"
       control={control}
       secureTextEntry = {true}
       rules = {{required : 'Password is required' , minLength :{value : 8 ,message :'Password must be 8 characters'} }}
       />

    
       <CustomButton
        text="Sign In" 
       onPress={handleSubmit(onSignInPressed)}/>

       <CustomButton
        text="Forgot Password"
         onPress= {onForgotPasswordPressed}
         type = "TERTIARY"
         />


      
      <CustomButton
        text="Don't have an acc? Create one"
         onPress= {onSignUpPressed}
         type = "TERTIARY"
         />
    </View>
    </ScrollView>
  )
}

const styles =  StyleSheet.create(
  {
    root :{
      alignItems: 'center',
      padding : 10,
      
    },

    logo : {
      width : '100%',
      maxWidth : 300,
      maxHeight : 200,
    },

    btn : {
      width :100,
      marginHorizontal : 10 ,
      padding : 20,
    }


   
  }
)

export default SignInScreen 