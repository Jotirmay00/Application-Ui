import { View, Text,StyleSheet,Pressable } from 'react-native'
import React from 'react'

const CustomButton = ({onPress,text,type="PRIMARY"}) => {
  return (
    <Pressable onPress={onPress}
     style = {[styles.container, styles[`container_${type}`]]}>
      <Text style = {[styles.text, styles[`text_${type}`]]}>{text}</Text>
    </Pressable>
  )
}

const styles = StyleSheet.create({

    container : {
        
       
        width : '50%',
        padding : 15 , 
        marginVertical : 5 ,
         
        alignItems : 'center' , 
        borderRadius : 20 ,
    },

    container_PRIMARY :{
        backgroundColor : '#003399',
    },

    container_TERTIARY :{
        width : '100%'
    },

    container_SECONDARY :{
       backgroundColor : '#003399',
        borderRadius : 100,
    },

    text :{
        fontWeight : 'bold' , 
        color : 'white',
    },

    text_TERTIARY :{
        color : 'grey',
    },

    text_SECONDARY :{
        color : 'white',
    },

})

export default CustomButton