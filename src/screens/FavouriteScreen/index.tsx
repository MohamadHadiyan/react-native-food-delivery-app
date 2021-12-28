import React, {useMemo} from 'react';
import {View} from 'react-native';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import createStyles from './styles';
import AppHeader from '../../components/AppHeader';
import {HomeStackParamList} from '../../constants/TypeScript';

type Props = NativeStackScreenProps<HomeStackParamList, 'CheckoutOrderScreen'>;

export default function FavouriteScreen({navigation}: Props) {
  const styles = useMemo(() => createStyles(), []);

  return (
    <View style={styles.body}>
      <AppHeader
        title="Favourites"
        leftIcon="west"
        leftFunc={() => navigation.goBack()}
        rightFunc={() => navigation.navigate('BottomTab')}
      />
    </View>
  );
}
