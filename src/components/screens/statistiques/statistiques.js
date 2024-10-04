import React, { useState } from 'react';
import Header from '../../header';
import {SafeAreaView} from 'react-native-safe-area-context';
import {View, Text, Image, ScrollView, TouchableOpacity} from 'react-native';
import {NativeBaseProvider} from 'native-base';
import {colors, icons, images} from '../../constants';
import Menu from "../home/menu2";
import {LineChart} from 'react-native-chart-kit';
import {Modal} from 'native-base';

import {Dimensions, StyleSheet} from 'react-native';

const {width} = Dimensions.get('window');
const scale = width / 420;

export default function Statistiques() {

 
  const [modalVisible, setModalVisible] = React.useState(false);
  const [size, setSize] = React.useState('lg');
  const [items, setItems] = useState(Menu);
  const filterItem =(categoryItem) =>{
    const updatedItems = Menu.filter((curElem) => {
return curElem.category === categoryItem;

    });
setItems(updatedItems);    
  }


  return (
    <SafeAreaView style={{flex: 1, backgroundColor: colors.Quaternary}}>
      <View style={{flex: 1, backgroundColor: colors.Quaternary}}>
        <Header title="Statistiques" />
        <ScrollView>
          <View
            style={{
              width: '100%', 
              height: 3200* scale, 
              backgroundColor: colors.tertiary,
              borderRadius: 70 * scale, 
              position: 'fixed',

              top: 0,
              left: 0,
            }}>
            <NativeBaseProvider>
             

              <View
                style={{
                  backgroundColor: colors.secondary,
                  height: 50 * scale,
                  marginHorizontal: 50 * scale,
                  borderRadius: 20 * scale,
                  marginTop: 40 * scale,
                  marginBottom: 40 * scale,
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  padding: 15 * scale,
                  fontWeight: 'bold',
                }}>

           
                <TouchableOpacity onPress={() => setItems(Menu)}>
                  <Text
                    style={{
                      fontWeight: 'bold',
                      color: colors.white,
                    }}>
                    Tout
                  </Text>
                </TouchableOpacity>

                <TouchableOpacity onPress={() => filterItem("gaz")}>
                  <Text
                    style={{
                      fontWeight: 'bold',
                      color: colors.white,
                    }}>
                    Gazes
                  </Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => filterItem("flamme")}>
                  <Text
                    style={{
                      fontWeight: 'bold',
                      color: colors.white,
                    }}>
                    Flammes
                  </Text>
                </TouchableOpacity>

                <TouchableOpacity onPress={() => filterItem("mouvement")}>
                  <Text
                    style={{
                      fontWeight: 'bold',
                      color: colors.white,
                    }}>
                    Mouvements
                  </Text>
                </TouchableOpacity>
              </View>

              <View
                style={{
                  marginRight: -40 * scale,
                  marginTop:20,
                }}>
                <View
        style={{
          fontSize: 18 * scale,
          marginBottom: 0 * scale,
          color: colors.secondary,
          width: '90%',
         
          marginVertical: 8 * scale,
          marginHorisontal: 8 * scale,
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        {items.map(elem => {
          const {
            id,
            title,
            category,
            icon,
            Battrie,
            Etat,
            Conssomation,
            Duree,
          } = elem;
          return (
            <Modal
              key={id}
              isOpen={modalVisible}
              onClose={setModalVisible}
              size={size}>
              <Modal.Content maxH="412">
                <Modal.CloseButton />
                <Modal.Header
                  style={{
                    justifyContent: 'center',
                  }}>

                    <Text>
                      caracteristiques
                    </Text>
                  
                </Modal.Header>
                <Modal.Body>
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
                      Battrie :
                    </Text>

                    <Text
                      style={{
                        color: colors.primary,
                        fontSize: 15 * scale,
                        fontWeight: 'bold',
                      }}>
                      {Battrie}
                    </Text>
                  </View>

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
                      Etat du capteur :
                    </Text>

                    <Text
                      style={{
                        color: colors.primary,
                        fontSize: 15 * scale,
                        fontWeight: 'bold',
                      }}>
                      {Etat}
                    </Text>
                  </View>

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
                      Conssomation d'energie
                    </Text>

                    <Text
                      style={{
                        color: colors.primary,
                        fontSize: 15 * scale,
                        fontWeight: 'bold',
                      }}>
                     
                      {Conssomation}
                    </Text>
                  </View>

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
                      Duree de fonctionnement :
                    </Text>

                    <Text
                      style={{
                        color: colors.primary,
                        fontSize: 15 * scale,
                        fontWeight: 'bold',
                      }}>
                      {Duree}
                    </Text>
                  </View>

                  <View style={{}}>
                    <Text
                      style={{
                        color: colors.Quaternary,
                        fontSize: 15,

                        marginRight: 5,
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
          );
        })}
        
        {items.map(elem => {
          const {id, title, category, icon} = elem;
          return (
            <View key={id} style={{marginBottom:20}}>
              <View
                style={{
                  flexDirection: 'row',
                  marginLeft: 40 * scale,
                  alignItems: 'center',
                  marginBottom: 0 * scale,
                  marginTop: 0 * scale,
                }}>
                <Image
                  source={icon}
                  style={{
                    height: 27 * scale,
                    width: 27 * scale,
                    tintColor: colors.primary,
                    marginBottom: 6 * scale,
                    marginRight: 10 * scale,
                  }}
                />

                <Text
                  style={{
                    fontSize: 18 * scale,
                    fontWeight: 'bold',
                    color: colors.secondary,
                    marginBottom: 8 * scale,
                  }}>
                  Capteur de {category}  {id}
                </Text>
              </View>

              <TouchableOpacity
                onPress={() => {
                  setModalVisible(!modalVisible);
                }}>
                <LineChart
                  data={{
                    labels: [
                      'January',
                      'February',
                      'March',
                      'April',
                      'May',
                      'June',
                    ],
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
                  width={350 * scale}
                  height={220 * scale}
                  yAxisLabel="$"
                  yAxisSuffix="k"
                  yAxisInterval={1} 
                  chartConfig={{
                    backgroundColor: colors.Quaternary,
                    backgroundGradientFrom: colors.Quaternary,
                    backgroundGradientTo: colors.secondary,
                    decimalPlaces: 2 * scale,
                    color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
                    labelColor: (opacity = 1) =>
                      `rgba(255, 255, 255, ${opacity})`,
                    style: {
                      borderRadius: 16 * scale,
                    },
                    propsForDots: {
                      r: '6',
                      strokeWidth: '2',
                      stroke: colors.Quaternary,
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
          );
        })}
        
      </View>
              </View>
            </NativeBaseProvider>
          </View>
        </ScrollView>
      </View>
    </SafeAreaView>
  );
}
