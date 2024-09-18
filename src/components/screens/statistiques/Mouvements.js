
import React from 'react';
import Header from '../../header';
import {SafeAreaView} from 'react-native-safe-area-context';
import {View, Text, Image, ScrollView} from 'react-native';
import { NativeBaseProvider} from 'native-base';
import {colors, icons, images} from '../../constants';
import LineChartMouvements from '../home/lineChartMouvements';


const Mouvements = () => {
  return (
   



            <View style={{
flexDirection:'column',
gap:1

}}>



                     
 
<LineChartMouvements/>
<LineChartMouvements/>
<LineChartMouvements/>
<LineChartMouvements/>
<LineChartMouvements/>


                      
</View>



  )
}

export default Mouvements