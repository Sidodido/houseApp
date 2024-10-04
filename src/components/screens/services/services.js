import React from 'react';
import Header from '../../header';
import {SafeAreaView} from 'react-native-safe-area-context';
import {View, Text, Image, ScrollView, TouchableOpacity} from 'react-native';
import {NativeBaseProvider} from 'native-base';
import {colors, icons, images} from '../../constants';
import {Dimensions, StyleSheet} from 'react-native';
import {Button, Card, Switch} from 'react-native-paper';

const {width} = Dimensions.get('window');
const scale = width / 420;

const Services = () => {
  return (
    <SafeAreaView style={{flex: 1, backgroundColor: colors.Quaternary}}>
      <View style={{flex: 1, backgroundColor: colors.Quaternary}}>
        <Header title="Services" />
        <ScrollView>
          <View
            style={{
              width: '100%', // adjust the width to your needs
              height: 1500* scale, // adjust the height to your needs
              backgroundColor: colors.tertiary,
              borderRadius: 70 * scale, // this will create a semi-circle
              position: 'fixed',
              top: 0,
              left: 0,
            }}>
            <NativeBaseProvider>
              <View>
                <Text
                  style={{
                    fontSize: 22,
                    fontWeight: 600,
                    color: colors.secondary,
                    textAlign: 'center',
                    marginTop: 30,
                  }}>
                  Sélectionnez le service qui vous intéresse
                </Text>
              </View>

              <Card
                elevation={4}
                style={{
                  height: 370 * scale,
                  marginRight: 10 * scale,
                  marginLeft: 10 * scale,
                  backgroundColor: colors.Quaternary,
                  shadowColor: colors.white,
                  borderRadius: 30 * scale,
                  justifyContent: 'center',
                  marginTop: 30 * scale,
                }}>
                <Card.Content
                  style={{
                    justifyContent: 'space-between',
                    marginHorizontal: 'auto',
                  }}>
                  <Text
                    style={{
                      color: colors.primary,
                      fontSize: 23 * scale,
                      textAlign: 'center',
                      marginBottom: 20 * scale,
                      fontWeight: '500',
                    }}>
                    Installation des cameras
                  </Text>
                  <TouchableOpacity>
                    <Image
                      source={images.service1}
                      style={{width: 350, height: 230}}
                    />
                  </TouchableOpacity>
                </Card.Content>
              </Card>

              <Card
                elevation={4}
                style={{
                  height: 370 * scale,
                  marginRight: 10 * scale,
                  marginLeft: 10 * scale,
                  backgroundColor: colors.Quaternary,
                  shadowColor: colors.white,
                  borderRadius: 30 * scale,
                  justifyContent: 'center',
                  marginTop: 30 * scale,
                }}>
                <Card.Content
                  style={{
                    justifyContent: 'space-between',
                    marginHorizontal: 'auto',
                  }}>
                  <Text
                    style={{
                      color: colors.primary,
                      fontSize: 23 * scale,
                      textAlign: 'center',
                      marginBottom: 20,
                      fontWeight: '500',
                    }}>
                    Installation domotique
                  </Text>
                  <TouchableOpacity>
                    <Image
                      source={images.service2}
                      style={{width: 350, height: 230}}
                    />
                  </TouchableOpacity>
                </Card.Content>
              </Card>
              <Card
                elevation={4}
                style={{
                  height: 370 * scale,
                  marginRight: 10 * scale,
                  marginLeft: 10 * scale,
                  backgroundColor: colors.Quaternary,
                  shadowColor: colors.white,
                  borderRadius: 30 * scale,
                  justifyContent: 'center',
                  marginTop: 30 * scale,
                }}>
                <Card.Content
                  style={{
                    justifyContent: 'space-between',
                    marginHorizontal: 'auto',
                  }}>
                  <Text
                    style={{
                      color: colors.primary,
                      fontSize: 23 * scale,
                      textAlign: 'center',
                      marginBottom: 20,
                      fontWeight: '500',
                    }}>
                    Solutions electroniques
                  </Text>
                  <TouchableOpacity>
                    <Image
                      source={images.service3}
                      style={{width: 350 * scale, height: 230 * scale}}
                    />
                  </TouchableOpacity>
                </Card.Content>
              </Card>
            </NativeBaseProvider>
          </View>
        </ScrollView>
      </View>
    </SafeAreaView>
  );
};

export default Services;
