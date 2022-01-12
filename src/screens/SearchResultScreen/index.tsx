import React, {useMemo} from 'react';
import {ScrollView, View} from 'react-native';
import {HomeStackParamList} from '../../constants/TypeScript';
import createStyles from './styles';
import AppHeader from '../../components/AppHeader';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import RestarauntCard from '../../components/RestarauntCard';
import {restaraunts} from '../../constants/data';

type IProps = NativeStackScreenProps<HomeStackParamList, 'SearchResultScreen'>;

export default function SearchResultScreen({navigation, route}: IProps) {
  const styles = useMemo(() => createStyles(), []);
  const category = route.params.category;
  const data = restaraunts.filter(item =>
    item.menu.some(food => food.category._id === category._id),
  );

  return (
    <View style={styles.body}>
      <AppHeader
        title={data.length + ' Result for ' + category.name}
        leftIcon="west"
        leftFunc={() => navigation.goBack()}
        rightFunc={() => navigation.navigate('CheckoutOrderScreen')}
      />
      <ScrollView contentContainerStyle={styles.scroll}>
        {data.map((rest, index) => (
          <RestarauntCard
            containerStyle={styles.fullWidth}
            restaraunt={rest}
            key={index}
            menu={rest.menu}
            foodPress={food => navigation.navigate('FoodScreen', {food})}
          />
        ))}
      </ScrollView>
    </View>
  );
}
