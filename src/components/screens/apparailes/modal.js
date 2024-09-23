import React from 'react';
import Header from '../../header';
import {SafeAreaView} from 'react-native-safe-area-context';
import {View, Text, Image, ScrollView, TouchableOpacity} from 'react-native';
import { NativeBaseProvider} from 'native-base';
import {colors, icons, images} from '../../constants';
import {Dimensions, StyleSheet} from 'react-native';
import {Button, Card, Switch} from 'react-native-paper';
import CardPeripherique from './cardPeripherique';
import { Modal, Portal} from 'react-native-paper';
import { TextInput } from 'react-native-paper';
const {width} = Dimensions.get('window');
const scale = width / 420;


const modal = () => {
  return (
   
          <Modal  visible={visible} onDismiss={hideModal} contentContainerStyle={{
        padding: 40* scale,
        margin:40* scale,
        backgroundColor:colors.white,
        borderRadius:20* scale

      }}>
              <TextInput
      label={<Text style={{
        fontWeight:'bold'
      }}>Type :  <Text style={{
         fontWeight:'normal'
      }} >Ex .Mobile</Text></Text> }
      value={text}
      onChangeText={text => {
        setText(text);
        // change the text color to primary when the text changes
        setTextColor(colors.primary);
      }}
      style={{
        height:50,
        backgroundColor:'#9DB3BE',
        opacity:0.6,
        borderRadius:5* scale,
        color:textColor
      }}

      
      
    />
        </Modal>
  
  )
}

export default modal