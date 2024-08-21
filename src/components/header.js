import {View, Text, TouchableOpacity, Image, StyleSheet} from 'react-native';
import React from 'react';
import {useNavigation} from '@react-navigation/native';
import {colors, icons} from './constants';

const header = ({title, onPress}) => {
  const navigation = useNavigation();
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
        onPress={onPress}
        style={styles.iconContainer}>
          <Image
            resizeMode="contain"
            style={styles.icon}
            source={icons.notification}
          />
        </TouchableOpacity>

      </View>
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
  icon: {
    height: 24,
    width: 24,
    tintColor: colors.Quaternary,
  },
});
export default header;
