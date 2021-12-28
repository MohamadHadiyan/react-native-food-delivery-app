import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {BottomTabParamList} from '../../constants/TypeScript';
import {
  BookTableScreen,
  FavouriteScreen,
  MapScreen,
  ProfileScreen,
} from '../../screens';
import AppBottomTabBar from '../../components/AppBottomTabBar';
import MainDrawer from '../Drawer';

const Tab = createBottomTabNavigator<BottomTabParamList>();

export default function MainBottomTab() {
  return (
    <Tab.Navigator
      tabBar={props => <AppBottomTabBar {...props} />}
      screenOptions={{
        headerShown: false,
      }}>
      <Tab.Screen name="Drawer" component={MainDrawer} />
      <Tab.Screen name="FavouriteScreen" component={FavouriteScreen} />
      <Tab.Screen name="MapScreen" component={MapScreen} />
      <Tab.Screen name="BookTableScreen" component={BookTableScreen} />
      <Tab.Screen name="ProfileScreen" component={ProfileScreen} />
    </Tab.Navigator>
  );
}
