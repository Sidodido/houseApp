
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
gap:20

}}>



                     
 
<LineChartGazes/>
<LineChartGazes/>
<LineChartGazes/>
<LineChartGazes/>
<LineChartGazes/>


                      
</View>

        
  )
}

export default Gazes