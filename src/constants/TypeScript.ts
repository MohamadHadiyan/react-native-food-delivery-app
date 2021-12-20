export interface Colors {
  WHITE: string;
  BLACK: string;
  DARK: string;
  LIGHT: string;
  GREEN: string;
  BLUE: string;
  RED: string;
  YELLOW: string;
  ORANGE: string;
  GREY: string;
  LIGHT_ORANGE: string;
  LIGHT_GREY: string;
  LIGHT_BLUE: string;
}

export type RouteParamType =
  | 'InitialScreen'
  | 'HomeScreen'
  | 'LoginScreen'
  | 'RegisterScreen';

export type MainStackParamList = {
  InitialScreen: undefined;
  HomeScreen: undefined;
  LoginScreen: undefined;
  RegisterScreen: undefined;
};
