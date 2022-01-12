import React from 'react';
import {StyleProp, TextStyle} from 'react-native';
import {Text} from 'react-native-elements';
import {RFValue} from 'react-native-responsive-fontsize';
import {colors} from '../../constants/colors';

interface IProps {
  text?: string;
  color?: string;
  size?: number;
  radius?: number;
  style?: StyleProp<TextStyle>;
  width?: number | string;
}

export default function Typography({
  text,
  color = colors.WHITE,
  size = 16,
  radius = 2,
  width,
  style,
}: IProps) {
  const defaultStyles = {
    color,
    textShadowColor: color,
    textShadowRadius: radius,
    fontSize: RFValue(size),
    width,
  };

  return <Text style={[defaultStyles, style]}>{text}</Text>;
}
