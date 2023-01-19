import { View, Text, StyleSheet, ScrollView } from 'react-native'
import React,{useState} from 'react'
import CustomInput from '../../components/CustomInput'
import CustomButton from '../../components/CustomButton'
import {useNavigation} from '@react-navigation/native'
import {useForm} from 'react-hook-form'

const SignUpScreen = () => {
  const {control ,handleSubmit,formState:{errors},} = useForm();

 
    const navigation = useNavigation();
  const onRegisterPressed = () => {

  }

  const onSignInPressed = () => {
    navigation.navigate('Sign In');
  }


  return (
    <ScrollView showsVerticalScrollIndicator={false}>
    <View style={styles.root}>
      
    <Text style={styles.title}>Create an Account </Text>

    <CustomInput
      name="UserID" 
      placeholder="UserID"
       control={control}
       
       />

       <CustomInput 
      placeholder="Username"
      name="Username"
      control = {control}
      />


      <CustomInput 
      placeholder="Password"
       name = "Password"
       control = {control}
       secureTextEntry = {true}
       />

     <CustomInput 
      placeholder=" Confirm Password"
       name = "Confirm Password"
       control = {control}
       secureTextEntry = {true}
       />

       <CustomButton
        text="Register"
         onPress= {handleSubmit(onRegisterPressed)}/>
       
      <CustomButton
        text="Already have an acc? Sign In"
         onPress= {onSignInPressed}
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

export default SignUpScreen 