import React from 'react';
import Header from '../../header';
import {SafeAreaView} from 'react-native-safe-area-context';
import {View, Text, Image, ScrollView} from 'react-native';
import { NativeBaseProvider} from 'native-base';
import {colors, icons, images} from '../../constants';


export default function Recherche() {
  return (
    <SafeAreaView style={{flex: 1, backgroundColor: colors.Quaternary}}>
    <View style={{flex: 1, backgroundColor: colors.Quaternary}}>
      <Header title="Recherche" />
      <ScrollView>
        <View
          style={{
            width: '100%', // adjust the width to your needs
            height: 10000, // adjust the height to your needs
            backgroundColor: colors.tertiary,
            borderRadius: 150, // this will create a semi-circle
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