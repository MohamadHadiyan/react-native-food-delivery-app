import React, {useMemo} from 'react';
import {View, Text} from 'react-native';
import {
  NavigationProp,
  ParamListBase,
  RouteProp,
} from '@react-navigation/native';
import createStyles from './styles';
import {MainStackParamList} from '../../constants/TypeScript';

interface IProps {
  navigation: NavigationProp<ParamListBase>;
  route: RouteProp<MainStackParamList>;
}

export default function LoginScreen({navigation, route}: IProps) {
  const styles = useMemo(() => createStyles(), []);

  return (
    <View style={styles.body}>
      <Text style={styles.text}>Login Screen</Text>
    </View>
  );
}
