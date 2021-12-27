import React, {useMemo} from 'react';
import {View} from 'react-native';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {RootStackParamList} from '../../constants/TypeScript';
import createStyles from './styles';
import AppHeader from '../../components/AppHeader';

type Props = NativeStackScreenProps<RootStackParamList, 'CheckoutOrderScreen'>;

export default function ProfileScreen({navigation}: Props) {
  const styles = useMemo(() => createStyles(), []);

  return (
    <View style={styles.body}>
      <AppHeader
        title="Profile"
        leftIcon="west"
        leftFunc={() => navigation.goBack()}
        rightFunc={() => navigation.navigate('HomeScreen')}
      />
    </View>
  );
}
