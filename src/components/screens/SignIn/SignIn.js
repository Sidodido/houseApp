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
              style={{width: 150*scale, height: 100*scale, marginBottom: 50*scale}}
            />

            <View style={{width: 350*scale, marginBottom: 30*scale}}>
              <Text
                style={{
                  fontSize: 20*scale,
                  color: colors.primary,
                  textAlign: 'left',
                  fontWeight: 'bold',
                }}>
                S'inscrire
              </Text>
            </View>

            <View style={{width: '100%', borderRadius: 10*scale, marginBottom: 10*scale}}>
              <Input
                style={{
                  height: 50*scale,
                  fontSize: 17*scale,
                  color: colors.secondary,
                }}
                InputLeftElement={
                  <Image
                    source={icons.aPropos}
                    style={{
                      marginLeft: 10*scale,
                      width: 20*scale,
                      height: 20*scale,
                      tintColor: colors.secondary,
                    }}
                  />
                }
                placeholder="Nom d'utilisateur"
              />
            </View>
            <View style={{width: '100%', borderRadius: 10*scale, marginBottom: 10*scale}}>
              <Input
                style={{
                  height: 50*scale,
                  fontSize: 17*scale,
                  color: colors.secondary,
                }}
                InputLeftElement={
                  <Image
                    source={icons.email}
                    style={{marginLeft: 10*scale, width: 20*scale, height: 20*scale}}
                  />
                }
                placeholder="Adresse email"
              />
            </View>

            <View style={{width: '100%', borderRadius: 10*scale, marginBottom: 10*scale}}>
              <Input
                style={{
                  height: 50*scale,
                  fontSize: 17*scale,
                  color: colors.secondary,
                }}
                InputLeftElement={
                  <Image
                    source={icons.phone}
                    style={{marginLeft: 10*scale, width: 20*scale, height: 20*scale}}
                  />
                }
                placeholder="Numero du telephone"
              />
            </View>

            <View style={{width: '100%', borderRadius: 10*scale, marginBottom: 10*scale}}>
              <Input
                style={{
                  height: 50*scale,
                  fontSize: 17*scale,
                  color: colors.secondary,
                  marginLeft: 10*scale,
                }}
                type={show ? 'text' : 'password'}
                InputRightElement={
                  <Pressable onPress={() => setShow(!show)}>
                    <Image
                      source={icons.password}
                      style={{marginRight: 10*scale, width: 25*scale, height: 20*scale}}
                    />
                  </Pressable>
                }
                placeholder="Password"
              />
            </View>

            <View style={{width: '100%', borderRadius: 10*scale, marginBottom: 30*scale}}>
              <Input
                style={{
                  height: 50*scale,
                  fontSize: 17*scale,
                  color: colors.secondary,
                  marginLeft: 10*scale,
                }}
                type={show ? 'text' : 'password'}
                InputRightElement={
                  <Pressable onPress={() => setShow(!show)}>
                    <Image
                      source={icons.password}
                      style={{marginRight: 10*scale, width: 25*scale, height: 15*scale}}
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
                borderRadius: 10*scale,
                marginBottom: 20*scale,
                color: colors.Quaternary,
              }}
              mode="contained"
              onPress={() => navigation.navigate('OTP')}>
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
                marginBottom: 20*scale,
              }}>
              <Text
                style={{
                  fontWeight: 300*scale,
                  color: colors.secondary,
                }}>
                ______________
              </Text>
              <Text
                style={{
                  fontSize: 17*scale,
                  color: colors.secondary,
                  textAlign: 'center',
                  marginLeft: 20*scale,
                  marginRight: 20*scale,
                }}>
                Se connecter avec
              </Text>
              <Text
                style={{
                  fontWeight: 300*scale,
                  color: colors.secondary,
                }}>
                ______________
              </Text>
            </View>

            <View style={{flexDirection: 'row', marginBottom: 40}}>
              <Image
                style={{marginRight: 15*scale, marginLeft: 20*scale, width: 60*scale, height: 60*scale}}
                source={icons.google}
              />
              <Image
                style={{marginRight: 15*scale, width: 60*scale, height: 60*scale}}
                source={icons.facebook}
              />
              <Image
                style={{marginRight: 15*scale, width: 60*scale, height: 60*scale}}
                source={icons.x}
              />
            </View>

            <View
              style={{
                flexDirection: 'row',
              }}>
              <Text
                style={{
                  fontSize: 17*scale,
                  color: colors.secondary,
                  textAlign: 'center',
                }}>
                j'ai déjà un compte
              </Text>

              <TouchableOpacity onPress={() => navigation.navigate('LogIn')}>
                <Text
                  style={{
                    fontSize: 17*scale,
                    color: colors.primary,
                    textAlign: 'center',
                    marginLeft: 10*scale,
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
