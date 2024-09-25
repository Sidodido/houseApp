import React from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import {View, Text, Image, TouchableOpacity} from 'react-native';
import {Input, Icon, Stack, Pressable, Center} from 'native-base';

import {NativeBaseProvider} from 'native-base';
import {colors, icons, images} from '../../constants';
import {Dimensions, StyleSheet} from 'react-native';
import {Button, Card, Switch} from 'react-native-paper';

const {width} = Dimensions.get('window');
const scale = width / 420;

export default function SignIn({navigation}) {
  const [show, setShow] = React.useState(false);
  return (
    <SafeAreaView style={{flex: 1, backgroundColor: colors.Quaternary}}>
      <View
        style={{
          flex: 1,
          backgroundColor: colors.Quaternary,
          alignItems: 'center',
        }}>
        <NativeBaseProvider>
          <View
            style={{
              flexDirection: 'column',
              alignItems: 'center',
              marginVertical: 'auto',
            }}>
            <Image
              source={images.logo2}
              style={{width: 150, height: 100, marginBottom: 50}}
            />

            <View style={{width: 350, marginBottom: 30}}>
              <Text
                style={{
                  fontSize: 20,
                  color: colors.primary,
                  textAlign: 'left',
                  fontWeight: 'bold',
                }}>
                S'inscrire
              </Text>
            </View>

            <View style={{width: '100%', borderRadius: 10, marginBottom: 10}}>
              <Input
                style={{
                  height: 50,
                  fontSize: 17,
                  color: colors.secondary,
                }}
                InputLeftElement={
                  <Image
                    source={icons.aPropos}
                    style={{
                      marginLeft: 10,
                      width: 20,
                      height: 20,
                      tintColor: colors.secondary,
                    }}
                  />
                }
                placeholder="Nom d'utilisateur"
              />
            </View>
            <View style={{width: '100%', borderRadius: 10, marginBottom: 10}}>
              <Input
                style={{
                  height: 50,
                  fontSize: 17,
                  color: colors.secondary,
                }}
                InputLeftElement={
                  <Image
                    source={icons.email}
                    style={{marginLeft: 10, width: 20, height: 20}}
                  />
                }
                placeholder="Adresse email"
              />
            </View>

            <View style={{width: '100%', borderRadius: 10, marginBottom: 10}}>
              <Input
                style={{
                  height: 50,
                  fontSize: 17,
                  color: colors.secondary,
                }}
                InputLeftElement={
                  <Image
                    source={icons.phone}
                    style={{marginLeft: 10, width: 20, height: 20}}
                  />
                }
                placeholder="Numero du telephone"
              />
            </View>

            <View style={{width: '100%', borderRadius: 10, marginBottom: 10}}>
              <Input
                style={{
                  height: 50,
                  fontSize: 17,
                  color: colors.secondary,
                  marginLeft: 10,
                }}
                type={show ? 'text' : 'password'}
                InputRightElement={
                  <Pressable onPress={() => setShow(!show)}>
                    <Image
                      source={icons.password}
                      style={{marginRight: 10, width: 25, height: 20}}
                    />
                  </Pressable>
                }
                placeholder="Password"
              />
            </View>

            <View style={{width: '100%', borderRadius: 10, marginBottom: 30}}>
              <Input
                style={{
                  height: 50,
                  fontSize: 17,
                  color: colors.secondary,
                  marginLeft: 10,
                }}
                type={show ? 'text' : 'password'}
                InputRightElement={
                  <Pressable onPress={() => setShow(!show)}>
                    <Image
                      source={icons.password}
                      style={{marginRight: 10, width: 25, height: 15}}
                    />
                  </Pressable>
                }
                placeholder="Password"
              />
            </View>

            <Button
              style={{
                width: 170 * scale,
                backgroundColor: colors.primary,
                marginHorizontal: 'auto',
                borderRadius: 10,
                marginBottom: 20,
                color: colors.Quaternary,
              }}
              mode="contained"
              onPress={() => navigation.navigate('LogIn')}>
              <Text
                style={{
                  color: colors.Quaternary,
                  fontSize: 17 * scale,
                  fontWeight: 'bold',
                }}>
                S'inscrire
              </Text>
            </Button>

            <View
              style={{
                flexDirection: 'row',
                marginBottom: 20,
              }}>
              <Text
                style={{
                  fontWeight: 300,
                  color: colors.secondary,
                }}>
                ______________
              </Text>
              <Text
                style={{
                  fontSize: 17,
                  color: colors.secondary,
                  textAlign: 'center',
                  marginLeft: 20,
                  marginRight: 20,
                }}>
                Se connecter avec
              </Text>
              <Text
                style={{
                  fontWeight: 300,
                  color: colors.secondary,
                }}>
                ______________
              </Text>
            </View>

            <View style={{flexDirection: 'row', marginBottom: 40}}>
              <Image
                style={{marginRight: 15, marginLeft: 20, width: 60, height: 60}}
                source={icons.google}
              />
              <Image
                style={{marginRight: 15, width: 60, height: 60}}
                source={icons.facebook}
              />
              <Image
                style={{marginRight: 15, width: 60, height: 60}}
                source={icons.x}
              />
            </View>

            <View
              style={{
                flexDirection: 'row',
              }}>
              <Text
                style={{
                  fontSize: 17,
                  color: colors.secondary,
                  textAlign: 'center',
                }}>
                j'ai déjà un compte
              </Text>

              <TouchableOpacity onPress={() => navigation.navigate('LogIn')}>
                <Text
                  style={{
                    fontSize: 17,
                    color: colors.primary,
                    textAlign: 'center',
                    marginLeft: 10,
                  }}>
                  se connecter
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </NativeBaseProvider>
      </View>
    </SafeAreaView>

    //  <Navigation/>
  );
}