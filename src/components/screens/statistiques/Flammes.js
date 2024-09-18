
import React from 'react';
import Header from '../../header';
import {SafeAreaView} from 'react-native-safe-area-context';
import {View, Text, Image, ScrollView} from 'react-native';
import { NativeBaseProvider} from 'native-base';
import {colors, icons, images} from '../../constants';
import LineChartFlammes from '../home/lineChartFlammes';


const Flammes = () => {
  return (
   
              
            <View style={{
flexDirection:'column',
gap:20

}}>



                     
 
<LineChartFlammes/>
<LineChartFlammes/>
<LineChartFlammes/>
<LineChartFlammes/>
<LineChartFlammes/>


                      
</View>

     
  )
}

export default Flammes