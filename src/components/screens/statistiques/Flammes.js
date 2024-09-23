import React from 'react';
import Header from '../../header';
import {SafeAreaView} from 'react-native-safe-area-context';
import {View, Text, Image, ScrollView} from 'react-native';
import {NativeBaseProvider} from 'native-base';
import {colors, icons, images} from '../../constants';
import LineChartFlammes from '../home/lineChartFlammes';
import {Dimensions, StyleSheet} from 'react-native';

const {width} = Dimensions.get('window');
const scale = width / 420; 


const Flammes = () => {
  return (
    <View
      style={{
        flexDirection: 'column',
        gap: 20* scale,
      }}>
  

      <View
        style={{
          flexDirection: 'row',
          marginLeft: 40* scale,
          alignItems: 'center',
          marginBottom: -20* scale,
          marginTop: -20* scale,
        }}>
        <Image
          source={icons.fire1}
          style={{
            height: 27* scale,
            width: 27* scale,
            tintColor: colors.primary,
            marginBottom: 6* scale,
            marginRight: 10* scale,
          }}
        />

        <Text
          style={{
            fontSize: 18* scale,
            fontWeight: 'bold',
            color: colors.secondary,
            marginBottom: 8* scale,
          }}>
          Capteur de Flamme 1
        </Text>
      </View>

      <LineChartFlammes />

      <View
        style={{
          flexDirection: 'row',
          marginLeft: 40* scale,
          alignItems: 'center',
          marginBottom: -20* scale,
          marginTop: -20* scale,
        }}>
        <Image
          source={icons.Home2}
          style={{
            height: 27* scale,
            width: 27* scale,
            tintColor: colors.primary,
            marginBottom: 6* scale,
            marginRight: 10* scale,
          }}
        />

        <Text
          style={{
            fontSize: 18* scale,
            fontWeight: 'bold',
            color: colors.secondary,
            marginBottom: 8* scale,
          }}>
          Capteur de Flamme 2
        </Text>
      </View>

      <LineChartFlammes />

      <View
        style={{
          flexDirection: 'row',
          marginLeft: 40* scale,
          alignItems: 'center',
          marginBottom: -20* scale,
          marginTop: -20* scale,
        }}>
        <Image
          source={icons.fire2}
          style={{
            height: 27* scale,
            width: 27* scale,
            tintColor: colors.primary,
            marginBottom: 6* scale,
            marginRight: 10* scale,
          }}
        />

        <Text
          style={{
            fontSize: 18* scale,
            fontWeight: 'bold',
            color: colors.secondary,
            marginBottom: 8* scale,
          }}>
          Capteur de Flamme 4
        </Text>
      </View>

      <LineChartFlammes />

      <View
        style={{
          flexDirection: 'row',
          marginLeft: 40* scale,
          alignItems: 'center',
          marginBottom: -20* scale,
          marginTop: -20* scale,
        }}>
        <Image
          source={icons.Home2}
          style={{
            height: 27* scale,
            width: 27* scale,
            tintColor: colors.primary,
            marginBottom: 6* scale,
            marginRight: 10* scale,
          }}
        />

        <Text
          style={{
            fontSize: 18* scale,
            fontWeight: 'bold',
            color: colors.secondary,
            marginBottom: 8* scale,
          }}>
          Capteur de Flamme 5
        </Text>
      </View>

      <LineChartFlammes />
    </View>
  );
};

export default Flammes;
