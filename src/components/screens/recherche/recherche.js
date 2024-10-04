import React from 'react';
import Header from '../../header';
import {SafeAreaView} from 'react-native-safe-area-context';
import {View, Text, Image, ScrollView} from 'react-native';
import {NativeBaseProvider} from 'native-base';
import {colors, icons, images} from '../../constants';
import {Searchbar} from 'react-native-paper';

import {Dimensions, StyleSheet} from 'react-native';

const {width} = Dimensions.get('window');
const scale = width / 420;

export default function Recherche() {
  const [searchQuery, setSearchQuery] = React.useState('');

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
              borderRadius: 70 * scale, // this will create a semi-circle
              position: 'fixed',
              top: 0,
              left: 0,
            }}>
            <NativeBaseProvider>
              <Searchbar
                style={{
                  marginHorizontal: 30 * scale,
                  marginTop: 60,
                }}
                placeholder="Search"
                onChangeText={setSearchQuery}
                value={searchQuery}
                icon={icons.recherche}
                clearIcon={icons.exit}
              />

              <View style={{}}></View>
            </NativeBaseProvider>
          </View>
        </ScrollView>
      </View>
    </SafeAreaView>
  );
}
