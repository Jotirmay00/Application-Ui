import { View, Text,ActivityIndicator } from 'react-native'
import {React,useState,useEffect} from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SignInScreen from '../screens/SignInScreen';
import SignUpScreen from '../screens/SignUpScreen';
import ConfirmEmailScreen from '../screens/ConfirmEmailScreen';
import NewPasswordScreen from '../screens/NewPasswordScreen';
import ResetPassword from '../screens/ResetPassword';
import HomeScreen from '../screens/HomeScreen/HomeScreen';

import{Auth,Hub} from 'aws-amplify'

const Stack = createNativeStackNavigator();


const Navigation = () => {

  const [user, setUser] = useState(undefined);

  const checkUser = async () => {
    try {
      const authUser = await Auth.currentAuthenticatedUser({bypassCache: true});
      setUser(authUser);
    } catch (e) {
      setUser(null);
    }
  };

  useEffect(() => {
    checkUser();
  }, []);

  useEffect(() => {
    const listener = data => {
      if (data.payload.event === 'signIn' || data.payload.event === 'signOut') {
        checkUser();
      }
    };

    Hub.listen('auth', listener);
    return () => Hub.remove('auth', listener);
  }, []);

  if (user === undefined) {
    return (
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <ActivityIndicator />
      </View>
    );
  }

  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}}>

      {user ? (
          <Stack.Screen name="Home" component={HomeScreen} />
        ) : (
          <>
        <Stack.Screen name="Sign In" component={SignInScreen}/>
        <Stack.Screen name="Sign Up" component={SignUpScreen}/>
        <Stack.Screen name="Confirm Email" component={ConfirmEmailScreen}/>
        <Stack.Screen name="Reset Password" component={ResetPassword}/>
        <Stack.Screen name="New Password" component={NewPasswordScreen}/>
        </>
        )}
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default Navigation;