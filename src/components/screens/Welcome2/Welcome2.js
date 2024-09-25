import React from 'react';
import Header from '../../header';
import {SafeAreaView} from 'react-native-safe-area-context';
import {
  View,
  Text,
  Image,
  ScrollView,
  Touchable,
  TouchableOpacity,
} from 'react-native';
import {NativeBaseProvider} from 'native-base';
import {colors, icons, images} from '../../constants';
import {Dimensions, StyleSheet} from 'react-native';
import {Button, Card, Switch} from 'react-native-paper';

const {width} = Dimensions.get('window');
const scale = width / 420;

export default function Welcome2( {navigation}) {
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
              justifyContent: 'center',
              alignItems: 'center',
              marginVertical: 'auto',
            }}>
            <Image
              source={images.logo2}
              style={{width: 250, height: 180, marginBottom: 50}}
            />

            <View style={{width:240,marginBottom:30}}>


            
            <Text style={{
              fontSize:17,
              color:colors.secondary,
              textAlign:'center'
            }}>
            Rendre votre journée plus intelligente
            </Text></View>
            <Button
              style={{
                width: 170 * scale,
                backgroundColor: colors.primary,
                marginHorizontal: 'auto',
                borderRadius: 10,
marginBottom:70,
                color: colors.Quaternary,
              }}
              mode="contained"
              onPress ={() => navigation.navigate('SignIn')}
              >
              <Text
                style={{
                  color: colors.Quaternary,
                  fontSize: 17 * scale,
                  fontWeight: 'bold',
                }}>
                S'inscrire
              </Text>
            </Button>

<View style={{
  flexDirection:'row'
}}>
<Text style={{
              fontSize:17,
              color:colors.secondary,
              textAlign:'center'
            }}>
            j'ai déjà un compte 
        
            </Text>  


            <TouchableOpacity     onPress ={() => navigation.navigate('LogIn')}>


         
              <Text style={{
              fontSize:17,
              color:colors.primary,
              textAlign:'center',
              marginLeft:10
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
