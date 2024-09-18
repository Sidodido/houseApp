import React from 'react';
import Header from '../../header';
import {SafeAreaView} from 'react-native-safe-area-context';
import {View, Text, Image, ScrollView, TouchableOpacity} from 'react-native';
import { NativeBaseProvider} from 'native-base';
import {colors, icons, images} from '../../constants';
import Flammes from './Flammes';
import Mouvements from './Mouvements';
import Gazes from './Gazes';


export default function Statistiques() {
  return (
    <SafeAreaView style={{flex: 1, backgroundColor: colors.Quaternary}}>
    <View style={{flex: 1, backgroundColor: colors.Quaternary}}>
      <Header title="Statistiques" />
      <ScrollView>
        <View
          style={{
            width: '100%', // adjust the width to your needs
            height: 10000, // adjust the height to your needs
            backgroundColor: colors.tertiary,
            borderRadius: 150, // this will create a semi-circle
            position: 'fixed',
            
            top: 0,
            left: 0,
           
          }}>
          <NativeBaseProvider>
            {/* here the rest of code */}


<View
style={{
  backgroundColor:colors.secondary,
  height:50,
  marginHorizontal:50,
  borderRadius:20,
  marginTop:40,
  marginBottom:40,
  flexDirection:'row',
  justifyContent:'space-between',
  alignItems:'center',
  padding:15,
  fontWeight:'bold'
  }}
>



  {/* hna chof kifeh ra7 dir le filtre dyalkk
      zid focus to text 
      zid licon et titre du chaque graphe
  */}
<TouchableOpacity>
  <Text  style={{

fontWeight:'bold',
color:colors.white,

  }}>
Tout
  </Text>
</TouchableOpacity>

<TouchableOpacity>
  <Text  style={{

fontWeight:'bold',
color:colors.white,

  }}>
    Gazes
  </Text>
</TouchableOpacity>
<TouchableOpacity>
  <Text  style={{

fontWeight:'bold',
color:colors.white,

  }}>
    Flammes
  </Text>
</TouchableOpacity>

<TouchableOpacity>
  <Text  style={{

fontWeight:'bold',
color:colors.white,

  }}>
    Mouvements
  </Text>
</TouchableOpacity>

</View>

<View style={{
marginRight: -40

}}>




<Gazes/>
<Flammes/>
<Mouvements/>



</View>



           


          </NativeBaseProvider>
        </View>
      </ScrollView>
    </View>
  </SafeAreaView>
  )
}