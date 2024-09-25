import React from 'react';
import Header from './src/components/header';
import {SafeAreaView} from 'react-native-safe-area-context';
import {View, Text, Image, ScrollView, Touchable, TouchableOpacity} from 'react-native';
import { NativeBaseProvider} from 'native-base';
import {colors, icons, images} from './src/components/constants';
import {Dimensions, StyleSheet} from 'react-native';
import {Button, Card, Switch} from 'react-native-paper';

const {width} = Dimensions.get('window');
const scale = width / 420; 

export default function App () {
  return (
    
    
    <SafeAreaView style={{flex: 1, backgroundColor: colors.Quaternary}}>
    <View style={{flex: 1, backgroundColor: colors.Quaternary,alignItems:'center'}}>
      
     
    
          <NativeBaseProvider>
    

<View  style={{justifyContent:'center',alignItems:'center',marginVertical:'auto'}}>

<Image source={images.logo2} style={{ width:250,height:180 ,marginBottom:50}}/>
<Button style={{width:170* scale,
backgroundColor:colors.primary,
marginHorizontal:'auto',
borderRadius:10,

color:colors.Quaternary



}}  mode="contained" >
<Text style={{color: colors.Quaternary, fontSize: 17* scale,fontWeight:'bold'}} >commencer</Text>

</Button>




</View>
          </NativeBaseProvider>
        
     
    </View>
  </SafeAreaView>

      //  <Navigation/>
    
   



)}
  
 


