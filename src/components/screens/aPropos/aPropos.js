import React from 'react';
import Header from '../../header';
import {SafeAreaView} from 'react-native-safe-area-context';
import {View, Text, Image, ScrollView} from 'react-native';
import { NativeBaseProvider} from 'native-base';
import {colors, icons, images} from '../../constants';
import {Dimensions, StyleSheet} from 'react-native';

const {width} = Dimensions.get('window');
const scale = width / 420; 


const APropos = () => {
  return (
    <SafeAreaView style={{flex: 1, backgroundColor: colors.Quaternary}}>
    <View style={{flex: 1, backgroundColor: colors.Quaternary}}>
      <Header title="A propos" />
      <ScrollView>
        <View
          style={{
            width: '100%', // adjust the width to your needs
            height: 1000, // adjust the height to your needs
            backgroundColor: colors.tertiary,
            borderRadiusTop: 50* scale, // this will create a semi-circle
            position: 'fixed',
            top: 0,
            left: 0,
          }}>
          <NativeBaseProvider>
      
<View style={{flexDirection:'column',
justifyContent:'center',
alignItems:'center'
}}>

<Image source={images.logo4 }  style={{width:200,height:150,marginTop:30,borderRadius:10}}/>
<Image source={images.aboutImg }  style={{width:400,height:250,marginTop:30,borderRadius:10}}/>



<View style={{width:300, marginTop:20}}>

  <Text style={{color:colors.primary,fontSize:22,fontWeight:'bold',textAlign:'center'}}>
Startup algérienne dans le
 domaine du domotique

</Text>
</View>






<Text style={{fontSize:17 ,marginBottom:20,marginTop:20,color:colors.secondary}}>

Nous proposons des produits pour vous protéger contre le vol, les gaz et les incendies, ainsi que pour contrôler votre maison à distance via Internet ou à Pune. 
Nous offrons également



</Text>



<View style={{marginLeft:9}}>

<Text style={{fontSize:15, textAlign:'left',color:colors.secondary}}>
  également un service après-vente.
</Text>
<Text style={{fontSize:15, textAlign:'left',color:colors.secondary}}>
  une installation professionnelle des produits.
</Text>
<Text style={{fontSize:15, textAlign:'left',color:colors.secondary}}>
  un développement de produits personnalisés selon vos besoins.
</Text>

</View>



</View>






          </NativeBaseProvider>
        </View>
      </ScrollView>
    </View>
  </SafeAreaView>
       
   
  )
}

export default APropos