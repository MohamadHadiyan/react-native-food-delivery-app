import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {MainStackParamList} from '../constants/TypeScript';
import {
  InitialScreen,
  HomeScreen,
  LoginScreen,
  RegisterScreen,
} from '../screens';
import {Header} from 'react-native-elements';
import {colors} from '../constants/colors';
import {RFValue} from 'react-native-responsive-fontsize';

const MainStack = createNativeStackNavigator<MainStackParamList>();

export default function Screens() {
  return (
    <NavigationContainer>
      <MainStack.Navigator
        initialRouteName="InitialScreen"
        screenOptions={{
          headerShown: false,
        }}>
        <MainStack.Screen name="InitialScreen" component={InitialScreen} />
        <MainStack.Screen name="LoginScreen" component={LoginScreen} />
        <MainStack.Screen name="RegisterScreen" component={RegisterScreen} />
        <MainStack.Screen name="HomeScreen" component={HomeScreen} />
      </MainStack.Navigator>
    </NavigationContainer>
  );
}
