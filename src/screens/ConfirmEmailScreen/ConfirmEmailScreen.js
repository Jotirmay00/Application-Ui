import { View, Text,ScrollView,StyleSheet,Alert } from 'react-native'
import React from 'react'
import CustomInput from '../../components/CustomInput'
import CustomButton from '../../components/CustomButton'
import { useNavigation } from '@react-navigation/native'
import { useForm } from 'react-hook-form'
import Auth from 'aws-amplify'



const ConfirmEmailScreen = () => {

    const {control ,handleSubmit,watch,} = useForm();

    const navigation = useNavigation();

    const onResendPress = async () => {
      try {
        await Auth.resendSignUp(email);
        Alert.alert('Success', 'Code was resent to your email');
      } catch (e) {
        Alert.alert('Oops', e.message);
      }
    };

const onConfirmPressed = async data => {
  try {
    await Auth.confirmSignUp(data.email, data.code);
    navigation.navigate('SignIn');
  } catch (e) {
    Alert.alert('Oops', e.message);
  }
};


const onSignInPress =() => {
    navigation.navigate('Sign In')
}



  return (

    <ScrollView showsVerticalScrollIndicator={false}>
      <View style={styles.root}>
        <Text style={styles.title}>Confirm your email</Text>

        <CustomInput
          name="email"
          control={control}
          placeholder="Email Id"
          rules={{
            required: 'Email Id code is required',
          }}
        />

        <CustomInput
          name="code"
          control={control}
          placeholder="Enter your confirmation code"
          rules={{
            required: 'Confirmation code is required',
          }}
        />

        <CustomButton
         text="Confirm"
          onPress={handleSubmit(onConfirmPressed)} />

        <CustomButton
          text="Resend code"
          onPress={onResendPress}
          type="SECONDARY"
        />

        <CustomButton
          text="Back to Sign in"
          onPress={onSignInPress}
          type="TERTIARY"
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
  

export default ConfirmEmailScreen