import React, {useMemo} from 'react';
import {View, Text} from 'react-native';
import {NavigationProp, ParamListBase} from '@react-navigation/native';
import createStyles from './styles';

interface IProps {
  navigation: NavigationProp<ParamListBase>;
}

export default function InitialScreen({navigation}: IProps) {
  const styles = useMemo(() => createStyles(), []);

  return (
    <View style={styles.body}>
      <Text style={styles.text}>Initial Screen</Text>
    </View>
  );
}
