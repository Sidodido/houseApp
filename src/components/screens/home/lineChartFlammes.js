import {View, Text, Image, ScrollView, TouchableOpacity} from 'react-native';
import React, {useRef, useState} from 'react';
import {colors, icons, images} from '../../constants';
import {Modal, Center, VStack, NativeBaseProvider, Avatar} from 'native-base';
import {Dimensions, StyleSheet} from 'react-native';
import {LineChart} from 'react-native-chart-kit';

const {width} = Dimensions.get('window');
const scale = width / 420; // based on iphone 5s's width

const lineChartFlammes = () => {

    const [modalVisible, setModalVisible] = React.useState(false);
    const [size, setSize] = React.useState('lg');
  
  return (
    <View>
      <View
        style={{
          fontSize: 18 * scale,
          marginBottom: 20 * scale,
          color: colors.secondary,
          width: '90%',
          height: 250 * scale,
          marginVertical: 8* scale,
          marginHorisontal: 8* scale,
          justifyContent: 'center',
          alignItems: 'center',
        }}>
       

        <Modal isOpen={modalVisible} onClose={setModalVisible} size={size}>
          <Modal.Content maxH="412">
            <Modal.CloseButton />
            <Modal.Header
              style={{
                justifyContent: 'center',
              }}>
              caracteristiques
            </Modal.Header>
            <Modal.Body>
              <View
                style={{
                  flexDirection: 'row',
                }}>
                <Text
                  style={{
                    color: colors.Quaternary,
                    fontSize: 15* scale,

                    marginRight: 5* scale,
                  }}>
                  Battrie :
                </Text>

                <Text
                  style={{
                    color: colors.primary,
                    fontSize: 15* scale,
                    fontWeight: 'bold',
                  }}>
                  70 %
                </Text>
              </View>

              <View
                style={{
                  flexDirection: 'row',
                }}>
                <Text
                  style={{
                    color: colors.Quaternary,
                    fontSize: 15* scale,

                    marginRight: 5* scale,
                  }}>
                  Etat du capteur :
                </Text>

                <Text
                  style={{
                    color: colors.primary,
                    fontSize: 15* scale,
                    fontWeight: 'bold',
                  }}>
                  Tres Bien
                </Text>
              </View>

              <View
                style={{
                  flexDirection: 'row',
                }}>
                <Text
                  style={{
                    color: colors.Quaternary,
                    fontSize: 15* scale,

                    marginRight: 5* scale,
                  }}>
                  Conssomation d’energie :
                </Text>

                <Text
                  style={{
                    color: colors.primary,
                    fontSize: 15* scale,
                    fontWeight: 'bold',
                  }}>
                  200 wh
                </Text>
              </View>

              <View
                style={{
                  flexDirection: 'row',
                }}>
                <Text
                  style={{
                    color: colors.Quaternary,
                    fontSize: 15* scale,

                    marginRight: 5* scale,
                  }}>
                  Duree de fonctionnement :
                </Text>

                <Text
                  style={{
                    color: colors.primary,
                    fontSize: 15* scale,
                    fontWeight: 'bold',
                  }}>
                  22 mois 4 Jours
                </Text>
              </View>

              <View style={{}}>
                <Text
                  style={{
                    color: colors.Quaternary,
                    fontSize: 15* scale,

                    marginRight: 5* scale,
                  }}>
                  Notifications du capteur :
                </Text>
              </View>
            </Modal.Body>
            <Modal.Footer>
              <ScrollView
                style={{
                  height: 40 * scale,
                }}>
                <View
                  style={{
                    flexDirection: 'row',
                  }}>
                  <Text
                    style={{
                      color: colors.Quaternary,
                      fontSize: 15 * scale,
                      marginRight: 5 * scale,
                    }}>
                    ¤
                  </Text>

                  <Text
                    style={{
                      color: colors.secondary,
                      fontSize: 15 * scale,

                      marginRight: 10 * scale,
                    }}>
                    23:00
                  </Text>
                  <Text
                    style={{
                      color: colors.Quaternary,
                      fontSize: 15 * scale,
                    }}>
                    alert de detection de gaz
                  </Text>
                </View>
              </ScrollView>
            </Modal.Footer>
          </Modal.Content>
        </Modal>

        <TouchableOpacity
          onPress={() => {
            setModalVisible(!modalVisible);
          }}>
          <LineChart
            data={{
              labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
              datasets: [
                {
                  data: [
                    Math.random() * 100,
                    Math.random() * 100,
                    Math.random() * 100,
                    Math.random() * 100,
                    Math.random() * 100,
                    Math.random() * 100,
                  ],
                },
              ],
            }}
            width={350 * scale} // from react-native
            height={220 * scale}
            yAxisLabel="$"
            yAxisSuffix="k"
            yAxisInterval={1} // optional, defaults to 1
            chartConfig={{
              backgroundColor: colors.secondary,
              backgroundGradientFrom: colors.secondary,
              backgroundGradientTo: colors.Quaternary,
              decimalPlaces: 2 * scale, // optional, defaults to 2dp
              color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
              labelColor: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
              style: {
                borderRadius: 16 * scale,
              },
              propsForDots: {
                r: '6',
                strokeWidth: '2',
                stroke: colors.secondary,
              },
            }}
            bezier
            style={{
              marginVertical: 8 * scale,
              marginHorisontal: 8 * scale,
              borderRadius: 16 * scale,
            }}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default lineChartFlammes;
