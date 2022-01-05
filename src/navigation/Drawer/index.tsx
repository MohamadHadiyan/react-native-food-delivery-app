import {createDrawerNavigator} from '@react-navigation/drawer';
import React from 'react';
import AppDrawer from '../../components/AppDrawer';
import {DrawerParamList} from '../../constants/TypeScript';
import {BusinessScreen, HomeScreen} from '../../screens';

const Drawer = createDrawerNavigator<DrawerParamList>();

export default function MainDrawer() {
  return (
    <Drawer.Navigator
      drawerContent={props => <AppDrawer {...props} />}
      screenOptions={{
        headerShown: false,
        swipeEdgeWidth: 50,
      }}>
      <Drawer.Screen name="Home" component={HomeScreen} />
      <Drawer.Screen name="Business" component={BusinessScreen} />
      <Drawer.Screen name="Driver" component={BusinessScreen} />
      <Drawer.Screen name="Payment" component={BusinessScreen} />
      <Drawer.Screen name="Promotions" component={BusinessScreen} />
      <Drawer.Screen name="Settings" component={BusinessScreen} />
    </Drawer.Navigator>
  );
}
