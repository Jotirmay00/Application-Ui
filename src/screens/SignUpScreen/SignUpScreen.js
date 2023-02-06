import { View, Text, StyleSheet, ScrollView,Alert } from 'react-native'
import React,{useState} from 'react'
import CustomInput from '../../components/CustomInput'
import CustomButton from '../../components/CustomButton'
import {useNavigation} from '@react-navigation/native'
import {useForm} from 'react-hook-form'
import Auth from 'aws-amplify'



const SignUpScreen = () => {
  const {control ,handleSubmit,watch,} = useForm();

  const pwd = watch('password');
 
    const navigation = useNavigation();
    
    const onRegisterPressed = async data => {
      const {password, email} = data;
      try {
        await Auth.signUp({
          email,
          password,
          
        });
  
        navigation.navigate('ConfirmEmail');
      } catch (e) {
        Alert.alert('Oops', e.message);
      }
    };
  const onSignInPressed = () => {
    navigation.navigate('Sign In');
  }


  const EMAIL_REGEX =
  /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

  return (
    <ScrollView showsVerticalScrollIndicator={false}>
    <View style={styles.root}>
      
    <Text style={styles.title}>Create an Account </Text>

    <CustomInput
      name="email" 
      placeholder="Email-ID"
       control={control}
       rules={{
        required: 'Email is required',
        pattern: {value: EMAIL_REGEX, message: 'Email is invalid'},
      }}
       />



      <CustomInput 
      placeholder="Password"
       name = "psassword"
       control = {control}
       secureTextEntry = {true}
       rules = {{
        required : 'Password is required' , minLength :{value : 8 ,message :'Password must be 8 characters'}
       }}
       />

     <CustomInput 
      placeholder=" Confirm Password"
       name = "Confirm Password"
       control = {control}
       secureTextEntry = {true}
       rules={{
        required : 'Password is required' , minLength :{value : 8 ,message :'Password must be 8 characters'}
      }}
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