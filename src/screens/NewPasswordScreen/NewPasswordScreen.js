import { View, Text,StyleSheet } from 'react-native'
import React from 'react'
import CustomInput from '../../components/CustomInput'
import CustomButton from '../../components/CustomButton'
import { useForm } from 'react-hook-form'
import { useNavigation } from '@react-navigation/native'

const NewPasswordScreen = () => {

    const {control ,handleSubmit,} = useForm();

const navigation = useNavigation();

const onSignInPressed = () => {
    navigation.navigate('Sign Up');
  }

  const onResetPressed = () => {
    navigation.navigate('Sign In');
  }


    const EMAIL_REGEX =
    /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
  
  return (
    <View style={styles.root}>
    <Text style={styles.title}>Reset Password</Text>

    <CustomInput 
    placeholder="UserID/Email-Id"
     name="EmailId"
     control = {control}
     rules={{
      required: 'Email is required',
      pattern: {value: EMAIL_REGEX, message: 'Email is invalid'},
    }}
    />

   <CustomInput 
    placeholder="Code"
     name = "Code"
     control={control}
     secureTextEntry = {true}
     rules = {{required : 'Please enter your code'}}
     />

    <CustomInput 
    placeholder=" New Password"
     name ="new password"
     control = {control}
     secureTextEntry = {true}
     rules = {{required : 'Please enter a new password' , minLength :{value : 8 ,message :'Password must be 8 characters'} }}
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

export default NewPasswordScreen