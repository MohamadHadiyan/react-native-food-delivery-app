import React, {useMemo} from 'react';
import {View} from 'react-native';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import createStyles from './styles';
import AppHeader from '../../components/AppHeader';
import {DrawerParamList} from '../../constants/TypeScript';

type Props = NativeStackScreenProps<DrawerParamList, 'BusinessScreen'>;

export default function BusinessScreen({navigation, route}: Props) {
  const styles = useMemo(() => createStyles(), []);

  return (
    <View style={styles.body}>
      <AppHeader
        title={route.name}
        leftIcon="west"
        leftFunc={() => navigation.goBack()}
        rightFunc={() => console.log('go')}
      />
    </View>
  );
}
