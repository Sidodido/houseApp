import React,{ useRef, useState } from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import {View, Text, Image, TouchableOpacity} from 'react-native';
import { Icon, Stack, Pressable, Center} from 'native-base';
import { Input } from '@rneui/themed';
import {NativeBaseProvider} from 'native-base';
import {colors, icons, images} from '../../constants';
import {Dimensions, StyleSheet} from 'react-native';
import {Button, Card,TextInput, Switch} from 'react-native-paper';

const {width} = Dimensions.get('window');
const scale = width / 420;

export default function OTP({navigation}) {
  const [show, setShow] = React.useState(false);
  const input1Ref = useRef(null);
  const input2Ref = useRef(null);
  const input3Ref = useRef(null);
  const input4Ref = useRef(null);
  const input5Ref = useRef(null);
  const input6Ref = useRef(null);
  const input7Ref = useRef(null);

  // Fonction pour déplacer le focus lorsque la longueur max est atteinte
  const moveToNext = (text, maxLength, nextInput) => {
    if (text.length === 1) {
      nextInput.current?.focus();
    }
  };

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
              style={{
                width: 280 * scale,
                height: 200 * scale,
                marginBottom: 30 * scale,
              }}
            />

            <View style={{width: 350 * scale, marginBottom: 30 * scale}}>
              <Text
                style={{
                  fontSize: 25 * scale,
                  color: colors.primary,
                  textAlign: 'center',
                  fontWeight: 'bold',
                }}>
                Verification OTP
              </Text>
            </View>

            <View style={{flexDirection: 'row', marginBottom: 10}}>
            <Input

            maxLength={1} 
            inputStyle={{
              color: colors.primary
            }}
            inputContainerStyle={{width:20}}
            onChangeText={(text) => moveToNext(text, 4, input2Ref)}
            containerStyle={{
                 
                  borderColor: colors.primary,
                  backgroundColor:colors.Quaternary,
                  borderWidth: 1 * scale,
                  width: 40 * scale,
                  height: 40 * scale,
                  borderRadius: 10 * scale,
                  marginRight: 10 * scale,
                }}
                
               />
<Input
            inputContainerStyle={{width:20}}

onChangeText={(text) => moveToNext(text, 4, input3Ref)}
 ref={input2Ref}
maxLength={1} 
 
            inputStyle={{
              color: colors.primary
            }}
            containerStyle={{
                 
                  borderColor: colors.primary,
                  backgroundColor:colors.Quaternary,
                  borderWidth: 1 * scale,
                  width: 40 * scale,
                  height: 40 * scale,
                  borderRadius: 10 * scale,
                  marginRight: 10 * scale,
                }}/>

<Input
            inputContainerStyle={{width:20}}

onChangeText={(text) => moveToNext(text, 4, input4Ref)}
ref={input3Ref}
maxLength={1} 
            inputStyle={{
              color: colors.primary
            }}
            containerStyle={{
                 
                  borderColor: colors.primary,
                  backgroundColor:colors.Quaternary,
                  borderWidth: 1 * scale,
                  width: 40 * scale,
                  height: 40 * scale,
                  borderRadius: 10 * scale,
                  marginRight: 10 * scale,
                }}/>

              <Input
            inputContainerStyle={{width:20}}

             onChangeText={(text) => moveToNext(text, 4, input5Ref)}
             ref={input4Ref}
            inputStyle={{
              color: colors.primary
            }}
            containerStyle={{
                 
                  borderColor: colors.primary,
                  backgroundColor:colors.Quaternary,
                  borderWidth: 1 * scale,
                  width: 40 * scale,
                  height: 40 * scale,
                  borderRadius: 10 * scale,
                  marginRight: 10 * scale,
                }}/>

                

<Input
            inputContainerStyle={{width:20}}

 onChangeText={(text) => moveToNext(text, 4, input6Ref)}
 ref={input5Ref}
maxLength={1} 
            inputStyle={{
              color: colors.primary
            }}
            containerStyle={{
                 
                  borderColor: colors.primary,
                  backgroundColor:colors.Quaternary,
                  borderWidth: 1 * scale,
                  width: 40 * scale,
                  height: 40 * scale,
                  borderRadius: 10 * scale,
                  marginRight: 10 * scale,
                }}/>
   <Input
            inputContainerStyle={{width:20}}

   onChangeText={(text) => moveToNext(text, 4, input7Ref)}
   ref={input6Ref}
   maxLength={1} 
            inputStyle={{
              color: colors.primary,  
            }}
            containerStyle={{
                 
                  borderColor: colors.primary,
                  backgroundColor:colors.Quaternary,
                  borderWidth: 1 * scale,
                  width: 40 * scale,
                  height: 40 * scale,
                  borderRadius: 10 * scale,
                  marginRight: 10 * scale,
                }}/>
            </View>
            <View style={{width: '70%', marginBottom: 20 * scale}}>
              <Text style={{textAlign: 'right', color: colors.primary}}>
                0.59s
              </Text>
            </View>

            <View
              style={{
                flexDirection: 'row',
                marginBottom: 30 * scale,
                marginHorizontal: 20 * scale,
              }}>
              <Text
                style={{
                  fontSize: 18 * scale,
                  color: colors.secondary,
                  textAlign: 'center',
                  marginLeft: 20 * scale,
                  marginRight: 20 * scale,
                }}>
                Nous envoyons un OTP sur votre numéro enregistré
              </Text>
            </View>

            <Button
              style={{
                width: 130 * scale,
                backgroundColor: colors.primary,
                marginHorizontal: 'auto',
                borderRadius: 10 * scale,
                marginBottom: 70 * scale,
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
                Verifier
              </Text>
            </Button>

            <View
              style={{
                flexDirection: 'column',
              }}>
              <Text
                style={{
                  fontSize: 17 * scale,
                  color: colors.secondary,
                  textAlign: 'center',
                }}>
                Vous n'avez pas reçu l'OTP de vérification ?
              </Text>

              <TouchableOpacity onPress={() => navigation.navigate('OTP')}>
                <Text
                  style={{
                    fontSize: 17 * scale,
                    color: colors.primary,
                    textAlign: 'center',
                    marginLeft: 10 * scale,
                  }}>
                  Renvoyer
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
