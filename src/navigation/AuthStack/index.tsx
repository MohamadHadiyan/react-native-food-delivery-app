import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {AuthStackParamList} from '../../constants/TypeScript';
import {
  InitialScreen,
  LoginScreen,
  RegisterScreen,
  VerifyCodeScreen,
} from '../../screens';
import HomeStack from '../HomeStack';

const Stack = createNativeStackNavigator<AuthStackParamList>();

export default function AuthStack() {
  return (
    <Stack.Navigator
      initialRouteName="InitialScreen"
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name="InitialScreen" component={InitialScreen} />
      <Stack.Screen name="LoginScreen" component={LoginScreen} />
      <Stack.Screen name="RegisterScreen" component={RegisterScreen} />
      <Stack.Screen name="VerifyCodeScreen" component={VerifyCodeScreen} />
      <Stack.Screen name="HomeStack" component={HomeStack} />
    </Stack.Navigator>
  );
}
