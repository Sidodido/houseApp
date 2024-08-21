




import {View, Text, TouchableOpacity, Image, StyleSheet,ScrollView } from 'react-native';
import React, { useRef } from 'react';
import {useNavigation} from '@react-navigation/native';
import {colors, icons} from './constants';
import { Button, Actionsheet, useDisclose, Box, Center, NativeBaseProvider } from "native-base";


const header = ({title, onPress}) => {
  const navigation = useNavigation();
  const {
    isOpen,
    onOpen,
    onClose
  } = useDisclose();

  
  const handlePress = () => {
    onOpen();
  };

  const handleDeleteItem = (index) => {
    setItems((prevItems) => prevItems.filter((item, i) => i !== index));
  };
  return (
    <View style={styles.container}>
      <View style={{flexDirection: 'row', alignItems: 'center'}}>
        <TouchableOpacity
        onPress={()=> navigation.toggleDrawer()}
        >
          <Image
            resizeMode="contain"
            style={{
              height: 24,
    width: 24,
              tintColor:colors.primary}}
            source={icons.menu}
          />
        </TouchableOpacity>

        <Text style={{
          marginLeft:12,
          fontSize:17,
          fontWeight:"bold",
          flex:1,
          textAlign:'center',
          color:colors.secondary

        }}>
          {title}
        </Text>

        <TouchableOpacity 
        onPress={handlePress}
        style={styles.iconContainer}>
          <Image
            resizeMode="contain"
            style={styles.icon}
            source={icons.notification}
          />
        </TouchableOpacity>

      </View>

      <NativeBaseProvider>
 <Actionsheet isOpen={isOpen} onClose={onClose}>
        <Actionsheet.Content>



        <ScrollView>


        <Box w="95%"  style={{
flexDirection: 'row',
justifyContent:'space-between'

}} >
<Box   style={{ flex: 1, flexGrow: 1, marginRight:20}}>
<Text >iyuhg</Text>
<Text> description message    liyugukyguyguytguyuytgfyutytjdjyhgtdjtjhdhjtdjffhjkfjkfhkfrjkuuytkgkyuhukyfoyujilloygo</Text>

</Box>
     
<TouchableOpacity 
        onPress={handlePress}
        style={styles.exitContainer}>
          <Image
            resizeMode="contain"
            style={styles.exit}
            source={icons.notification}
          />
        </TouchableOpacity>




         
       



</Box>
          
          
          <Actionsheet.Item>Play</Actionsheet.Item>
          <Actionsheet.Item>Favourite</Actionsheet.Item>
          <Actionsheet.Item>Cancel</Actionsheet.Item>
          <Actionsheet.Item>Cancel</Actionsheet.Item>
          <Actionsheet.Item>Cancel</Actionsheet.Item>
          <Actionsheet.Item>Cancel</Actionsheet.Item>
          <Actionsheet.Item>Cancel</Actionsheet.Item>
          <Actionsheet.Item>Cancel</Actionsheet.Item>
          <Actionsheet.Item>Cancel</Actionsheet.Item>
          <Actionsheet.Item>Cancel</Actionsheet.Item>
          <Actionsheet.Item>Cancel</Actionsheet.Item>
          <Actionsheet.Item>Cancel</Actionsheet.Item>
          <Actionsheet.Item>Cancel</Actionsheet.Item>
          <Actionsheet.Item>Cancel</Actionsheet.Item>
          <Actionsheet.Item>Cancel</Actionsheet.Item>
          <Actionsheet.Item>Cancel</Actionsheet.Item>
          <Actionsheet.Item>Cancel</Actionsheet.Item>
          <Actionsheet.Item>Cancel</Actionsheet.Item>
          <Actionsheet.Item>Cancel</Actionsheet.Item>
          <Actionsheet.Item>Cancel</Actionsheet.Item>
          <Actionsheet.Item>Cancel</Actionsheet.Item>
          <Actionsheet.Item>Cancel</Actionsheet.Item>
          <Actionsheet.Item>Cancel</Actionsheet.Item>
          <Actionsheet.Item>Cancel</Actionsheet.Item>
          <Actionsheet.Item>Cancel</Actionsheet.Item>
          <Actionsheet.Item>Cancel</Actionsheet.Item>
          <Actionsheet.Item>Cancel</Actionsheet.Item>
          <Actionsheet.Item>Cancel</Actionsheet.Item>
          <Actionsheet.Item>Cancel</Actionsheet.Item>
          <Actionsheet.Item>Cancel</Actionsheet.Item>
          <Actionsheet.Item>Cancel</Actionsheet.Item>
          <Actionsheet.Item>Cancel</Actionsheet.Item>
          <Actionsheet.Item>Cancel</Actionsheet.Item>
          <Actionsheet.Item>Cancel</Actionsheet.Item>
          <Actionsheet.Item>Cancel</Actionsheet.Item>
          <Actionsheet.Item>Cancel</Actionsheet.Item>
          <Actionsheet.Item>Cancel</Actionsheet.Item>
          <Actionsheet.Item>Cancel</Actionsheet.Item>
          <Actionsheet.Item>Cancel</Actionsheet.Item>
          <Actionsheet.Item>Cancel</Actionsheet.Item>
          <Actionsheet.Item>hhgffrf</Actionsheet.Item>


        </ScrollView>



     

          

        </Actionsheet.Content>
      </Actionsheet>

      </NativeBaseProvider>
     
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    paddingVertical: 16,
    paddingHorizontal: 20,
    backgroundColor: colors.Quaternary,
  },

  iconContainer: {
    height: 45,
    width: 45,
    borderRadius:50,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: colors.primary,
  },
  exitContainer: {
   
 marginLeft:20,

    alignItems: 'center',
    justifyContent: 'center',
    margingRight:-30,
  
  },
  icon: {
    height: 24,
    width: 24,
    tintColor: colors.Quaternary,
  },
  exit:{

    height: 24,
    width: 24,
    tintColor: colors.tertiary,

  }
});
export default header;
