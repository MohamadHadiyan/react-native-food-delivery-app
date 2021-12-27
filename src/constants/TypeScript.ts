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

export interface Food {
  _id: string;
  name: string;
  type: string;
  price: string;
  images: ImageSourcePropType[];
  category: string;
  compositions: string[];
  desc: string;
  rating: number;
  calories: number;
  weight: number;
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

export type RootStackParamList = {
  InitialScreen: undefined;
  HomeScreen: undefined;
  LoginScreen: undefined;
  RegisterScreen: undefined;
  VerifyCodeScreen: undefined;
  FoodScreen: FoodScreenParamType;
  CheckoutOrderScreen: undefined;
};
