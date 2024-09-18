import React from 'react';
import {createDrawerNavigator, DrawerItemList} from '@react-navigation/drawer';
import {APropos, Services, Caracteristique, profile,Home, Product} from '../screens';
import BottomNavigation from './BottomNavigation';
import {View, Text, Image, Platform, Button} from 'react-native';
import {colors, icons} from '../constants';
import {SafeAreaView} from 'react-native-safe-area-context';





const Drawer = createDrawerNavigator();
const DrawerNavigation = () => {
  return (
    
    <Drawer.Navigator
      drawerContent={props => {
        return (
          <SafeAreaView>
            <View
              style={{
                height: 200,
                width: '100%',
                justifyContent: 'center',
                alignItems: 'center',
                backgroundColor: colors.primary,
              }}>
              <Image
                source={icons.avatar}
                style={{
                  height: 100,
                  width: 100,
                  marginBottom: 6,
                  borderRadius: 50,
                }}
              />
              <Text
                style={{
                  fontSize: 18,
                  fontWeight: 'bold',
                  color: colors.Quaternary,
                }}>
                Zidane Sidahmed
              </Text>
              <Text
                style={{
                  fontSize: 14,
                  color: colors.tertiary,
                }}>
                Admin
              </Text>
            </View>

            <DrawerItemList {...props} />
          </SafeAreaView>
        );
      }}
      screenOptions={{
        drawerStyle: {
          backgroundColor: 'white',
          width: 250,
        },
        headerStyle: {
          backgroundColor: colors.Quaternary,
          height: 60,
          borderRadius: 0,
        },
        headerShown: false,
        headerTintColor: colors.primary,
        drawerLabelStyle: {
          color: colors.Quaternary,
          fontSize: 14,
          marginLeft: -10,
        },
      }}>
      <Drawer.Screen
        name="Home"
        options={{
          drawerLabel: 'Home',
          title: 'Home',
          headerShadowVisible: false,
          drawerIcon: () => {
            return (
              <Image
                source={icons.Home1}
                resizeMode="contain"
                style={{
                  height: 24,
                  width: 24,
                  tintColor: colors.primary,
                }}
              />
            );
          },
        }}
        component={BottomNavigation}
      />

      <Drawer.Screen
        name="a Propos"
        options={{
          drawerLabel: 'a Propos de nous',
          title: 'a Propos de nous',
          headerShadowVisible: false,
          drawerIcon: () => {
            return (
              <Image
                source={icons.aPropos}
                resizeMode="contain"
                style={{
                  height: 24,
                  width: 24,
                  tintColor: colors.primary,
                }}
              />
            );
          },
        }}
        component={APropos}
      />

      <Drawer.Screen
        name="caracteristique"
        options={{
          drawerLabel: 'caracteristique',
          title: 'caracteristique',
          headerShadowVisible: false,
          drawerIcon: () => {
            return (
              <Image
                source={icons.caracteristique}
                resizeMode="contain"
                style={{
                  height: 24,
                  width: 24,
                  tintColor: colors.primary,
                }}
              />
            );
          },
        }}
        component={Caracteristique}
      />

      <Drawer.Screen
        name="product"
        options={{
          drawerLabel: 'product',
          title: 'product',
          headerShadowVisible: false,
          drawerIcon: () => {
            return (
              <Image
                source={icons.product}
                resizeMode="contain"
                style={{
                  height: 24,
                  width: 24,
                  tintColor: colors.primary,
                }}
              />
            );
          },
        }}
        component={Product}
      />

      <Drawer.Screen
        name="services"
        options={{
          drawerLabel: 'services',
          title: 'services',
          headerShadowVisible: false,
          drawerIcon: () => {
            return (
              <Image
                source={icons.services}
                resizeMode="contain"
                style={{
                  height: 24,
                  width: 24,
                  tintColor: colors.primary,
                }}
              />
            );
          },
        }}
        component={Services}
      />
       
    </Drawer.Navigator>
 
  );
};

export default DrawerNavigation;
