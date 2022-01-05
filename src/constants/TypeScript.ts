import {DrawerScreenProps} from '@react-navigation/drawer';
import {
  CompositeScreenProps,
  NavigatorScreenParams,
} from '@react-navigation/native';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {ImageSourcePropType} from 'react-native';

export interface Colors {
  WHITE: string;
  BLACK: string;
  DARK: string;
  DARK_2: string;
  DARKEN: string;
  LIGHT: string;
  GREEN: string;
  BLUE: string;
  RED: string;
  YELLOW: string;
  ORANGE: string;
  GREY: string;
  GREY_2: string;
  GREY_3: string;
  GREY_4: string;
  LIGHT_ORANGE: string;
  LIGHT_GREY: string;
  LIGHT_BLUE: string;
  LIGHT_SHADOW: string;
  DARK_SHADOW: string;
  DARKEN_SHADOW: string;
  NONE: string;
}

export interface FoodCategory {
  _id: string;
  name: string;
}

export interface Food {
  _id: string;
  name: string;
  price: string;
  images: ImageSourcePropType[];
  category: FoodCategory;
  compositions: string[];
  desc: string;
  rating: number;
  calories: number;
  weight: number;
  createdAt: string;
}

export interface Restaraunt {
  _id: string;
  name: string;
  category: string;
  logo: string;
  address: string;
  tel: string;
  position: {lag: string; lat: string};
  rating: number;
  distance?: number;
  isOpen: boolean;
  verified: boolean;
  slogan: string;
  workHours: {from: string; to: string};
  managerName: string;
  chef: string;
  visitThisMonth: number;
  story: string;
  reviews: string[];
  images: string[];
  tags: string[];
  socials: string[];
  website: string;
  menu: Food[];
}

type FoodScreenParamType = {
  food: Food;
};

type RestarauntScreenParamType = {
  restaraunt: Restaraunt;
};

export type AuthStackParamList = {
  InitialScreen: undefined;
  HomeStack: undefined;
  LoginScreen: undefined;
  RegisterScreen: undefined;
  VerifyCodeScreen: undefined;
};

export type HomeStackParamList = {
  BottomTab: undefined;
  FoodScreen: FoodScreenParamType;
  RestarauntScreen: RestarauntScreenParamType;
  CheckoutOrderScreen: undefined;
  BookTableScreen: undefined;
};

export type BottomTabParamList = {
  Drawer: undefined;
  FavouriteScreen: undefined;
  MapScreen: undefined;
  ProfileScreen: undefined;
};

export type DrawerParamList = {
  Home: NavigatorScreenParams<HomeStackParamList>;
  Business: undefined;
  Driver: undefined;
  Payment: undefined;
  Promotions: undefined;
  Settings: undefined;
  Help: undefined;
};

export type HomeScreenNavigationProp = CompositeScreenProps<
  DrawerScreenProps<DrawerParamList, 'Home'>,
  NativeStackScreenProps<HomeStackParamList>
>;
