import React, {useMemo, useState} from 'react';
import {FlatList, Platform, TouchableOpacity, View} from 'react-native';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {Button, Text} from 'react-native-elements';
import DateTimePicker, {Event} from '@react-native-community/datetimepicker';
import LinearGradient from 'react-native-linear-gradient';
import {Food, HomeStackParamList} from '../../constants/TypeScript';
import createStyles from './styles';
import AppHeader from '../../components/AppHeader';
import {restaraunts} from '../../constants/data';
import {colors} from '../../constants/colors';
import OrderFoodCard from '../../components/OrderFoodCard';

type Props = NativeStackScreenProps<HomeStackParamList, 'CheckoutOrderScreen'>;

const foods: Food[] = restaraunts
  .map(item => item.menu)
  .reduce((acc, food) => [...acc, ...food], []);

export default function CheckoutOrderScreen({navigation}: Props) {
  const styles = useMemo(() => createStyles(), []);
  const [date, setDate] = useState(new Date());
  const [show, setShow] = useState(false);

  const onChange = (event: Event, selectedDate?: Date) => {
    const currentDate = selectedDate || date;
    setShow(Platform.OS === 'ios');
    setDate(currentDate);
    console.log(currentDate);
  };

  return (
    <View style={styles.body}>
      <AppHeader
        title="Checkout order"
        leftIcon="west"
        leftFunc={() => navigation.goBack()}
        rightFunc={() => navigation.navigate('CheckoutOrderScreen')}
      />
      <FlatList
        data={foods.slice(0, 5)}
        keyExtractor={(_, i) => i.toString()}
        renderItem={({item, index}) => (
          <OrderFoodCard
            food={item}
            onPress={() => navigation.navigate('FoodScreen', {food: item})}
            index={index}
          />
        )}
        ListFooterComponent={() => (
          <View>
            <View style={styles.toTimeBox}>
              <Text style={styles.text}>To time</Text>
              <TouchableOpacity
                style={styles.toTime}
                onPress={() => setShow(!show)}>
                <Text style={styles.text}>{date.toLocaleTimeString()}</Text>
              </TouchableOpacity>
              {show && (
                <DateTimePicker
                  testID="dateTimePicker"
                  value={date}
                  mode="time"
                  is24Hour={true}
                  display="default"
                  onChange={onChange}
                />
              )}
            </View>
            <View style={styles.totalBox}>
              <Text style={styles.text}>Total amount</Text>
              <Text style={[styles.text, {color: colors.ORANGE}]}>
                {'$' + 124.44}
              </Text>
            </View>
            <Button
              onPress={() => navigation.navigate('BottomTab')}
              title="Checkout"
              titleStyle={styles.textButton}
              buttonStyle={styles.button}
              containerStyle={styles.buttonBox}
              ViewComponent={LinearGradient}
              linearGradientProps={{
                colors: [colors.ORANGE, colors.LIGHT_ORANGE],
              }}
            />
          </View>
        )}
      />
    </View>
  );
}
