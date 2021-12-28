import {createDrawerNavigator} from '@react-navigation/drawer';
import React from 'react';
import {DrawerParamList} from '../../constants/TypeScript';
import {BusinessScreen, HomeScreen} from '../../screens';

const Drawer = createDrawerNavigator<DrawerParamList>();

export default function MainDrawer() {
  return (
    <Drawer.Navigator
      screenOptions={{
        headerShown: false,
        swipeEdgeWidth: 100,
      }}>
      <Drawer.Screen name="HomeScreen" component={HomeScreen} />
      <Drawer.Screen name="BusinessScreen" component={BusinessScreen} />
      <Drawer.Screen name="DriverScreen" component={BusinessScreen} />
      <Drawer.Screen name="PaymentScreen" component={BusinessScreen} />
      <Drawer.Screen name="Promotions" component={BusinessScreen} />
      <Drawer.Screen name="SettingScreen" component={BusinessScreen} />
    </Drawer.Navigator>
  );
}
