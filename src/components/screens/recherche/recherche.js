import { View, Text } from 'react-native'
import React from 'react'
import Header from '../../header'

export default function Recherche() {
  return (
    <View >
           <Header title={"Recherche"}/>

           <View  style={{
       // adjust the width to your needs
      height: 10000, // adjust the height to your needs
      backgroundColor: 'blue',
      borderRadius: 200, // this will create a semi-circle
      position:'fixed',
      top: 0,
      left: 0,
    }} >
      
      {/* <View
        style={{
          width: '100%', // adjust the width to your needs
          height: 10000, // adjust the height to your needs
          backgroundColor: 'blue',
          borderRadius: 200, // this will create a semi-circle
          position: 'fixed',
          top: 0,
          left: 0,
        }}
      /> */}
    </View>


    </View>
  )
}