/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';

import {
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableWithoutFeedback,
  Keyboard,
} from 'react-native';

import Navigation from './src/navigation';

const App = () => { 
  return (
    <TouchableWithoutFeedback onPress={() =>{
      Keyboard.dismiss();
    }}>
    <SafeAreaView style={styles.root}>
        <Navigation/>
    </SafeAreaView>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
root: {
  flex : 1,
  backgroundColor : '#d9d9d9'
  
}
});

export default App;
