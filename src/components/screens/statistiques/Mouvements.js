import React from 'react';
import Header from '../../header';
import {SafeAreaView} from 'react-native-safe-area-context';
import {View, Text, Image, ScrollView} from 'react-native';
import {NativeBaseProvider} from 'native-base';
import {colors, icons, images} from '../../constants';
import LineChartMouvements from '../home/lineChartMouvements';

const {width} = Dimensions.get('window');
const scale = width / 420; 

const Mouvements = () => {
  return (
    <View
      style={{
        flexDirection: 'column',
        gap: 1* scale,
      }}>
      <View
        style={{
          flexDirection: 'row',
          marginLeft: 40* scale,
          alignItems: 'center',
        }}>
        <Image
          source={icons.door1}
          style={{
            height: 27* scale,
            width: 27* scale,
            tintColor: colors.primary,

            marginRight: 10* scale,
          }}
        />

        <Text
          style={{
            fontSize: 18* scale,
            fontWeight: 'bold',
            color: colors.white,
          }}>
          Capteur de Mouvement 1
        </Text>
      </View>

      <LineChartMouvements />

      <View
        style={{
          flexDirection: 'row',
          marginLeft: 40* scale,
          alignItems: 'center',
        }}>
        <Image
          source={icons.door2}
          style={{
            height: 27* scale,
            width: 27* scale,
            tintColor: colors.primary,

            marginRight: 10* scale,
          }}
        />

        <Text
          style={{
            fontSize: 18* scale,
            fontWeight: 'bold',
            color: colors.white,
          }}>
          Capteur de Mouvement 2
        </Text>
      </View>
      <LineChartMouvements />

      <View
        style={{
          flexDirection: 'row',
          marginLeft: 40* scale,
          alignItems: 'center',
        }}>
        <Image
          source={icons.fenetre3}
          style={{
            height: 27* scale,
            width: 27* scale,
            tintColor: colors.primary,

            marginRight: 10* scale,
          }}
        />

        <Text
          style={{
            fontSize: 18* scale,
            fontWeight: 'bold',
            color: colors.white,
          }}>
          Capteur de Mouvement 3
        </Text>
      </View>
      <LineChartMouvements />

      <View
        style={{
          flexDirection: 'row',
          marginLeft: 40* scale,
          alignItems: 'center',
        }}>
        <Image
          source={icons.fenetre1}
          style={{
            height: 27* scale,
            width: 27* scale,
            tintColor: colors.primary,

            marginRight: 10* scale,
          }}
        />

        <Text
          style={{
            fontSize: 18* scale,
            fontWeight: 'bold',
            color: colors.white,
          }}>
          Capteur de Mouvement 4
        </Text>
      </View>
      <LineChartMouvements />

      <View
        style={{
          flexDirection: 'row',
          marginLeft: 40* scale,
          alignItems: 'center',
        }}>
        <Image
          source={icons.fenetre2}
          style={{
            height: 27* scale,
            width: 27* scale,
            tintColor: colors.primary,

            marginRight: 10* scale,
          }}
        />

        <Text
          style={{
            fontSize: 18* scale,
            fontWeight: 'bold',
            color: colors.white,
          }}>
          Capteur de Mouvement 5
        </Text>
      </View>
      <LineChartMouvements />
    </View>
  );
};

export default Mouvements;
