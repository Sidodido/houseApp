import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import DrawerNavigation from './DrawerNavigation';
import { BottomNavigation } from './BottomNavigation';
import {  APropos } from '../screens';
import {
  Apparailes,
  Home,
  Parametres,
  Statistiques,
  Recherche,
} from '../screens';
const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{headerShown: false}}
        initialRouteName="Main">
          
      
        <Stack.Screen name="Main" component={DrawerNavigation} />
        
      </Stack.Navigator>
    </NavigationContainer>
  );
}
