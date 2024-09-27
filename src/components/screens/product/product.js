import React from 'react';
import Header from '../../header';
import {SafeAreaView} from 'react-native-safe-area-context';
import {View, Text, Image, ScrollView} from 'react-native';
import { NativeBaseProvider} from 'native-base';
import {colors, icons, images} from '../../constants';
import {Dimensions, StyleSheet} from 'react-native';

const {width} = Dimensions.get('window');
const scale = width / 420; 


const Product = () => {
  return (
    <SafeAreaView style={{flex: 1, backgroundColor: colors.Quaternary}}>
    <View style={{flex: 1, backgroundColor: colors.Quaternary}}>
      <Header title="Product" />
      <ScrollView>
        <View
          style={{
            width: '100%', // adjust the width to your needs
            height: 10000, // adjust the height to your needs
            backgroundColor: colors.tertiary,
            borderRadius: 150 * scale, // this will create a semi-circle
            position: 'fixed',
            top: 0,
            left: 0,
          }}>
          <NativeBaseProvider>
            {/* here the rest of code */}
          </NativeBaseProvider>
        </View>
      </ScrollView>
    </View>
  </SafeAreaView>
  )
}

export default Product