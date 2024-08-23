import {
  View,
  Text,
  TouchableOpacity,
  Image,
  StyleSheet,
  ScrollView,
} from 'react-native';
import React, {useState} from 'react';
import {useNavigation} from '@react-navigation/native';
import {colors, icons} from './constants';
import {
  Actionsheet,
  
  Box,
  NativeBaseProvider,
} from 'native-base';
import { useDisclose } from 'native-base';

import {Dimensions} from 'react-native';
const {width} = Dimensions.get('window');
const scale = width / 420;


const header = ({title, onPress}) => {
  const navigation = useNavigation();
  const {isOpen, onOpen, onClose} = useDisclose();
  const [items, setItems] = useState([
    {
      label: 'Play',
      description:
        'To add a function to delete an Actionsheet.Item when pressing on the TouchableOpacity, you can create a state to store the items and update the state',
    },
    {
      label: 'Favourite',
      description:
        'To add a function to delete an Actionsheet.Item when pressing on the TouchableOpacity, you can create a state to store the items and update the state',
    },
    {
      label: 'Cancel',
      description:
        'To add a function to delete an Actionsheet.Item when pressing on the TouchableOpacity, you can create a state to store the items and update the state',
    },
    {
      label: 'Favourite',
      description:
        'To add a function to delete an Actionsheet.Item when pressing on the TouchableOpacity, you can create a state to store the items and update the state',
    },
    {
      label: 'Cancel',
      description:
        'To add a function to delete an Actionsheet.Item when pressing on the TouchableOpacity, you can create a state to store the items and update the state',
    },
    {
      label: 'Favourite',
      description:
        'To add a function to delete an Actionsheet.Item when pressing on the TouchableOpacity, you can create a state to store the items and update the state',
    },
    {
      label: 'Cancel',
      description:
        'To add a function to delete an Actionsheet.Item when pressing on the TouchableOpacity, you can create a state to store the items and update the state',
    },
    {
      label: 'Favourite',
      description:
        'To add a function to delete an Actionsheet.Item when pressing on the TouchableOpacity, you can create a state to store the items and update the state',
    },
    {
      label: 'Cancel',
      description:
        'To add a function to delete an Actionsheet.Item when pressing on the TouchableOpacity, you can create a state to store the items and update the state',
    },
    {
      label: 'Favourite',
      description:
        'To add a function to delete an Actionsheet.Item when pressing on the TouchableOpacity, you can create a state to store the items and update the state',
    },
    {
      label: 'Cancel',
      description:
        'To add a function to delete an Actionsheet.Item when pressing on the TouchableOpacity, you can create a state to store the items and update the state',
    },
    {
      label: 'Favourite',
      description:
        'To add a function to delete an Actionsheet.Item when pressing on the TouchableOpacity, you can create a state to store the items and update the state',
    },
    {
      label: 'Cancel',
      description:
        'To add a function to delete an Actionsheet.Item when pressing on the TouchableOpacity, you can create a state to store the items and update the state',
    },
    // Add more items here
  ]);

  const handlePress = () => {
    onOpen();
  };

  const handleDeleteItem = index => {
    setItems(prevItems => prevItems.filter((item, i) => i !== index));
  };

  return (
    <View style={styles.container}>
      <View style={{flexDirection: 'row', alignItems: 'center'}}>
        <TouchableOpacity onPress={() => navigation.toggleDrawer()}>
          <Image
            resizeMode="contain"
            style={{
              height: 24* scale,
              width: 24* scale,
              tintColor: colors.primary,
            }}
            source={icons.menu}
          />
        </TouchableOpacity>

        <Text
          style={{
            marginLeft: 12* scale,
            fontSize: 20* scale,
            fontWeight: 'bold',
            flex: 1,
            textAlign: 'center',
            color: colors.secondary,
          }}>
          {title}
        </Text>

        <TouchableOpacity onPress={handlePress} style={styles.iconContainer}>
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
              {items.map((item, index) => (
                <React.Fragment key={index}>
                  <Box
                    w="95%"
                    style={{
                      flexDirection: 'row',
                      justifyContent: 'space-between',
                      borderBottomWidth: 1* scale,
                      borderBottomColor: '#ccc',
                      marginBottom: 5* scale,
                    }}>
                    <Box style={{flex: 1, flexGrow: 1, marginRight: 20* scale}}>
                      <Text
                        style={{
                          marginLeft: 12* scale,
                          fontSize: 17* scale,
                          fontWeight: 'bold',
                          flex: 1,
                          marginBottom: 3* scale,
                          color: colors.Quaternary,
                        }}>
                        {item.label}
                      </Text>
                      <Text
                        style={{
                          marginLeft: 12* scale,
                          fontSize: 14* scale,

                          flex: 1,
                          marginBottom: 10* scale,
                          color: colors.secondary,
                        }}>
                        {item.description}
                      </Text>
                    </Box>

                    <TouchableOpacity
                      onPress={() => handleDeleteItem(index)}
                      style={styles.exitContainer}>
                      <Image
                        resizeMode="contain"
                        style={styles.icon}
                        source={icons.exit}
                      />
                    </TouchableOpacity>
                  </Box>

                </React.Fragment>
              ))}
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
    paddingVertical: 16* scale,
    paddingHorizontal: 20* scale,
    backgroundColor: colors.Quaternary,
  },
  iconContainer: {
    height: 45* scale,
    width: 45* scale,
    borderRadius: 50* scale,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: colors.primary,
  },
  exitContainer: {
    marginLeft: 20* scale,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: -30* scale,
  },
  icon: {
    height: 24* scale,
    width: 24* scale,
    tintColor: colors.Quaternary,
  },
  exit: {
    height: 24* scale,
    width: 24* scale,
    tintColor: colors.tertiary,
  },
  deleteButton: {
    position: 'absolute',
    right: 10* scale,
    top: 10* scale,
  },
  deleteIcon: {
    height: 20* scale,
    width: 20* scale,
    tintColor: colors.error,
  },
});

export default header;
