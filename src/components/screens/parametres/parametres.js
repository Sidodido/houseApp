
import React from 'react';
import Header from '../../header';
import {SafeAreaView} from 'react-native-safe-area-context';
import {View, Text, Image, ScrollView} from 'react-native';
import { NativeBaseProvider} from 'native-base';
import {colors, icons, images} from '../../constants';
import {Dimensions, StyleSheet} from 'react-native';

const {width} = Dimensions.get('window');
const scale = width / 420; 

export default function Parametres() {
  return (
    <SafeAreaView style={{flex: 1, backgroundColor: colors.Quaternary}}>
      <View style={{flex: 1, backgroundColor: colors.Quaternary}}>
        <Header title="parameters" />
        <ScrollView>
          <View
            style={{
              width: '100%', // adjust the width to your needs
              height: 10000, // adjust the height to your needs
              backgroundColor: colors.tertiary,
              borderRadius: 70* scale, // this will create a semi-circle
              position: 'fixed',
              top: 0,
              left: 0,
            }}>
            <NativeBaseProvider>
              {/* here the rest of code */}


<View

style={{
 
  height: 7000, // adjust the height to your needs
  backgroundColor: colors.Quaternary,
  borderRadius: 70* scale, // this will create a semi-circle
  position: 'fixed',
marginHorizontal:15,
marginTop:15
}}

>


</View>



            </NativeBaseProvider>
          </View>
        </ScrollView>
      </View>
    </SafeAreaView>
  );
}
