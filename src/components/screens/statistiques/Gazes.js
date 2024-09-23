
import React from 'react';
import Header from '../../header';
import {SafeAreaView} from 'react-native-safe-area-context';
import {View, Text, Image, ScrollView} from 'react-native';
import { NativeBaseProvider} from 'native-base';
import {colors, icons, images} from '../../constants';
import LineChartGazes from '../home/lineChartGazes';


const Gazes = () => {
  return (
  

            <View style={{
flexDirection:'column',
gap:20,

}}>



<View style={{
        flexDirection: 'row',
        marginLeft:40,
        alignItems:"center",
marginBottom:-20,
marginTop:-10,

      }}>
        
      <Image
                        source={icons.Home2}
                        style={{
                          height: 27 ,
                          width: 27 ,
                          tintColor: colors.primary,
                          marginBottom: 6 ,
                          marginRight:10,
                        }}
                      />

<Text
                        style={{
                          fontSize: 18 ,
                          fontWeight: 'bold',
                          color: colors.white,
                          marginBottom: 8 ,
                        }}>
                        Capteur de gaz 1
                      </Text>
        
        </View>               
 
<LineChartGazes/>
<View style={{
        flexDirection: 'row',
        marginLeft:40,
        alignItems:"center",
marginBottom:-20,
marginTop:-30,

      }}>
        
      <Image
                        source={icons.cuisine1}
                        style={{
                          height: 27 ,
                          width: 27 ,
                          tintColor: colors.primary,
                          marginBottom: 6 ,
                          marginRight:10,

                        }}
                      />

<Text
                        style={{
                          fontSize: 18 ,
                          fontWeight: 'bold',
                          color: colors.white,
                          marginBottom: 8 ,
                        }}>
                        Capteur de gaz 2
                      </Text>
        
        </View> 
<LineChartGazes/>

<View style={{
        flexDirection: 'row',
        marginLeft:40,
        alignItems:"center",
marginBottom:-20,
marginTop:-30,

      }}>
        
      <Image
                        source={icons.door2}
                        style={{
                          height: 27 ,
                          width: 27 ,
                          tintColor: colors.primary,
                          marginBottom: 6 ,
                          marginRight:10,

                        }}
                      />

<Text
                        style={{
                          fontSize: 18 ,
                          fontWeight: 'bold',
                          color: colors.white,
                          marginBottom: 8 ,
                        }}>
                        Capteur de gaz 3
                      </Text>
        
        </View> 


<LineChartGazes/>

<View style={{
        flexDirection: 'row',
        marginLeft:40,
        alignItems:"center",
marginBottom:-20,
marginTop:-30,

      }}>
        
      <Image
                        source={icons.chambre2}
                        style={{
                          height: 27 ,
                          width: 27 ,
                          tintColor: colors.primary,
                          marginBottom: 6 ,
                          marginRight:10,

                        }}
                      />

<Text
                        style={{
                          fontSize: 18 ,
                          fontWeight: 'bold',
                          color: colors.white,
                          marginBottom: 8 ,
                         

                        }}>
                        Capteur de gaz 4
                      </Text>
        
        </View> 
<LineChartGazes/>

<View style={{
        flexDirection: 'row',
        marginLeft:40,
        alignItems:"center",
marginBottom:-20,
marginTop:-20,

      }}>
        
      <Image
                        source={icons.Home2}
                        style={{
                          height: 27 ,
                          width: 27 ,
                          tintColor: colors.primary,
                          marginBottom: 6 ,
                          marginRight:10,
                        }}
                      />

<Text
                        style={{
                          fontSize: 18 ,
                          fontWeight: 'bold',
                          color: colors.white,
                          marginBottom: 8 ,
                        }}>
                        Capteur de gaz 5
                      </Text>
        
        </View>     

<LineChartGazes/>


                      
</View>

        
  )
}

export default Gazes