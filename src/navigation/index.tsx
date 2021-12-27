import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {
  InitialScreen,
  HomeScreen,
  LoginScreen,
  RegisterScreen,
  VerifyCodeScreen,
  FoodScreen,
  CheckoutOrderScreen,
} from '../screens';
import {RootStackParamList} from '../constants/TypeScript';

const RootStack = createNativeStackNavigator<RootStackParamList>();

export default function Screens() {
  return (
    <NavigationContainer>
      <RootStack.Navigator
        screenOptions={{
          headerShown: false,
        }}>
        <RootStack.Screen name="InitialScreen" component={InitialScreen} />
        <RootStack.Screen name="LoginScreen" component={LoginScreen} />
        <RootStack.Screen name="RegisterScreen" component={RegisterScreen} />
        <RootStack.Screen name="HomeScreen" component={HomeScreen} />
        <RootStack.Screen
          name="VerifyCodeScreen"
          component={VerifyCodeScreen}
        />
        <RootStack.Screen name="FoodScreen" component={FoodScreen} />
        <RootStack.Screen
          name="CheckoutOrderScreen"
          component={CheckoutOrderScreen}
        />
      </RootStack.Navigator>
    </NavigationContainer>
  );
}
