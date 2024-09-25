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

export default function OTP({navigation}) {
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
              style={{width: 280, height: 200, marginBottom: 30}}
            />

            <View style={{width: 350, marginBottom: 30}}>
              <Text
                style={{
                  fontSize: 25,
                  color: colors.primary,
                  textAlign: 'center',
                  fontWeight: 'bold',
                }}>
                Verification OTP
              </Text>
            </View>





<View style={{flexDirection:'row',marginBottom:10}}>
<View style={{borderColor:colors.primary,
borderWidth:1,
width:40,
height:40,
borderRadius:10,
marginRight:10}}>


</View>

<View style={{borderColor:colors.primary,
borderWidth:1,
width:40,
height:40,
borderRadius:10,
marginRight:10}}>


</View>

<View style={{borderColor:colors.primary,
borderWidth:1,
width:40,
height:40,
borderRadius:10,
marginRight:10}}>


</View>

<View style={{borderColor:colors.primary,
borderWidth:1,
width:40,
height:40,
borderRadius:10,
marginRight:10}}>


</View>

<View style={{borderColor:colors.primary,
borderWidth:1,
width:40,
height:40,
borderRadius:10,
marginRight:10}}>


</View>

<View style={{borderColor:colors.primary,
borderWidth:1,
width:40,
height:40,
borderRadius:10,
marginRight:10}}>


</View>

</View>
<View style={{width:'80%',marginBottom:20}}>

<Text style={{textAlign:'right',color:colors.primary}}>
  0.59s
</Text>


</View>





              <View
              style={{
                flexDirection: 'row',
                marginBottom: 30,
                marginHorizontal:20
              }}>
             
              <Text
                style={{
                  fontSize: 18,
                  color: colors.secondary,
                  textAlign: 'center',
                  marginLeft: 20,
                  marginRight: 20,
                }}>
                Nous envoyons un OTP sur votre numéro enregistré
              </Text>
            
            </View>


            <Button
              style={{
                width: 130 * scale,
                backgroundColor: colors.primary,
                marginHorizontal: 'auto',
                borderRadius: 10,
                marginBottom: 70,
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
                  fontSize: 17,
                  color: colors.secondary,
                  textAlign: 'center',
                }}>
               Vous n'avez pas reçu l'OTP de vérification ?
              </Text>

              <TouchableOpacity onPress={() => navigation.navigate('OTP')}>
                <Text
                  style={{
                    fontSize: 17,
                    color: colors.primary,
                    textAlign: 'center',
                    marginLeft: 10,
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
