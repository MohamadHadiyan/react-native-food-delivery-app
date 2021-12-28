import React, {useMemo} from 'react';
import {View} from 'react-native';
import createStyles from './styles';
import AppHeader from '../../components/AppHeader';
import {DrawerParamList} from '../../constants/TypeScript';
import {DrawerScreenProps} from '@react-navigation/drawer';

type Props = DrawerScreenProps<DrawerParamList, 'Business'>;

export default function BusinessScreen({navigation, route}: Props) {
  const styles = useMemo(() => createStyles(), []);

  return (
    <View style={styles.body}>
      <AppHeader
        title={route.name}
        leftIcon="menu"
        leftFunc={() => navigation.openDrawer()}
        rightFunc={() => console.log('go')}
      />
    </View>
  );
}
