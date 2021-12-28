import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import {HomeStackParamList} from '../../constants/TypeScript';
import {CheckoutOrderScreen, FoodScreen} from '../../screens';
import MainBottomTab from '../BottomTab';

const Stack = createNativeStackNavigator<HomeStackParamList>();

export default function HomeStack() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name="BottomTab" component={MainBottomTab} />
      <Stack.Screen name="FoodScreen" component={FoodScreen} />
      <Stack.Screen
        name="CheckoutOrderScreen"
        component={CheckoutOrderScreen}
      />
    </Stack.Navigator>
  );
}
