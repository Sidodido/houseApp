import React from 'react';
import Header from '../../header';
import {SafeAreaView} from 'react-native-safe-area-context';
import {View, Text, Image, ScrollView} from 'react-native';
import {NativeBaseProvider} from 'native-base';
import {colors, icons, images} from '../../constants';
import LineChartFlammes from '../home/lineChartFlammes';

const Flammes = () => {
  return (
    <View
      style={{
        flexDirection: 'column',
        gap: 20,
      }}>
  

      <View
        style={{
          flexDirection: 'row',
          marginLeft: 40,
          alignItems: 'center',
          marginBottom: -20,
          marginTop: -20,
        }}>
        <Image
          source={icons.fire1}
          style={{
            height: 27,
            width: 27,
            tintColor: colors.primary,
            marginBottom: 6,
            marginRight: 10,
          }}
        />

        <Text
          style={{
            fontSize: 18,
            fontWeight: 'bold',
            color: colors.white,
            marginBottom: 8,
          }}>
          Capteur de Flamme 1
        </Text>
      </View>

      <LineChartFlammes />

      <View
        style={{
          flexDirection: 'row',
          marginLeft: 40,
          alignItems: 'center',
          marginBottom: -20,
          marginTop: -20,
        }}>
        <Image
          source={icons.Home2}
          style={{
            height: 27,
            width: 27,
            tintColor: colors.primary,
            marginBottom: 6,
            marginRight: 10,
          }}
        />

        <Text
          style={{
            fontSize: 18,
            fontWeight: 'bold',
            color: colors.white,
            marginBottom: 8,
          }}>
          Capteur de Flamme 2
        </Text>
      </View>

      <LineChartFlammes />

      <View
        style={{
          flexDirection: 'row',
          marginLeft: 40,
          alignItems: 'center',
          marginBottom: -20,
          marginTop: -20,
        }}>
        <Image
          source={icons.fire2}
          style={{
            height: 27,
            width: 27,
            tintColor: colors.primary,
            marginBottom: 6,
            marginRight: 10,
          }}
        />

        <Text
          style={{
            fontSize: 18,
            fontWeight: 'bold',
            color: colors.white,
            marginBottom: 8,
          }}>
          Capteur de Flamme 4
        </Text>
      </View>

      <LineChartFlammes />

      <View
        style={{
          flexDirection: 'row',
          marginLeft: 40,
          alignItems: 'center',
          marginBottom: -20,
          marginTop: -20,
        }}>
        <Image
          source={icons.Home2}
          style={{
            height: 27,
            width: 27,
            tintColor: colors.primary,
            marginBottom: 6,
            marginRight: 10,
          }}
        />

        <Text
          style={{
            fontSize: 18,
            fontWeight: 'bold',
            color: colors.white,
            marginBottom: 8,
          }}>
          Capteur de Flamme 5
        </Text>
      </View>

      <LineChartFlammes />
    </View>
  );
};

export default Flammes;
