import {View, Text, Image, Platform} from 'react-native';
import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {
  Apparailes,
  Home,
  Parametres,
  Statistiques,
  Recherche,
} from '../screens';
import {colors, icons} from '../constants';


const Tab = createBottomTabNavigator();
const screenOptions = {
  tabBarShowLabel: false,
  tabBarStyle: {
    position: 'absolute',
    bottom: 10,
    right: 10,
    left: 10,
    elevation: 0,
    height: Platform.OS === 'ios' ? 90 : 60,
    borderRadius: 20,
    backgroundColor: colors.Quaternary,
   
  },
   headerShown: false,
};

const BottomNavigation = () => {
  return (
    <Tab.Navigator
    initialRouteName="DrawerHome"
    screenOptions={screenOptions}>
      <Tab.Screen
        name="apparailes"
        component={Apparailes}
        
        options={{
          tabBarIcon: ({focused}) => {
            return (
              <Image
                source={icons.apparailes}
                resizeMode="contain"
                style={{
                  height: 24,
                  width: 24,
                  tintColor: focused ? colors.primary : colors.secondary,
                }}
              />
            );
          },
        }}
      />

      <Tab.Screen
        name="recherche"
        component={Recherche}
        options={{
          tabBarIcon: ({focused}) => {
            return (
              <Image
                source={icons.recherche}
                resizeMode="contain"
                style={{
                  height: 24,
                  width: 24,
                  tintColor: focused ? colors.primary : colors.secondary,
                }}
              />
            );
          },
        }}
      />
      <Tab.Screen
        name="DrawerHome"
        component={Home}
        options={{
          tabBarIcon: ({focused}) => {
            return (
              <View
                style={{
                  alignItems: 'center',
                  justifyContent: 'center',

                  backgroundColor: focused ? colors.primary : colors.secondary,

                  height: Platform.OS === 'ios' ? 70 : 60,
                  width: Platform.OS === 'ios' ? 70 : 60,
                  top: Platform.OS === 'ios' ? -30 : -20,
                  borderRadius: Platform.OS === 'ios' ? 35 : 30,
                  borderWidth: 2,
                  borderColor: focused ? colors.secondary : colors.Quaternary,
                }}>
                <Image
                  source={icons.Home1}
                  resizeMode="contain"
                  style={{
                    height: 24,
                    width: 24,
                    tintColor: focused ? colors.Quaternary : colors.Quaternary,
                  }}
                />
              </View>
            );
          },
        }}
      />

      <Tab.Screen
        name="statistiques"
        component={Statistiques}
        options={{
          tabBarIcon: ({focused}) => {
            return (
              <Image
                source={icons.statistiques}
                resizeMode="contain"
                style={{
                  height: 24,
                  width: 24,
                  tintColor: focused ? colors.primary : colors.secondary,
                }}
              />
            );
          },
        }}
      />

      <Tab.Screen
        name="parametres"
        component={Parametres}
        options={{
          tabBarIcon: ({focused}) => {
            return (
              <Image
                source={icons.parametres}
                resizeMode="contain"
                style={{
                  height: 24,
                  width: 24,
                  tintColor: focused ? colors.primary : colors.secondary,
                }}
              />
            );
          },
        }}
        
      />
    </Tab.Navigator>
  );
};

export default BottomNavigation;
