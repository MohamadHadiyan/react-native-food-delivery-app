import React, {useMemo, useState} from 'react';
import {View} from 'react-native';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {RootStackParamList} from '../../constants/TypeScript';
import createStyles from './styles';
import AppHeader from '../../components/AppHeader';
import {Button, Image, Switch, Text} from 'react-native-elements';
import {TABLE} from '../../assets/images';
import {colors} from '../../constants/colors';
import LinearGradient from 'react-native-linear-gradient';

type Props = NativeStackScreenProps<RootStackParamList, 'CheckoutOrderScreen'>;
const availableTimes = ['5:30 PM', '4:00 PM', '6:30 PM', '8:00 PM'];

export default function BookTableScreen({navigation}: Props) {
  const styles = useMemo(() => createStyles(), []);
  const [rememberMe, setRememberMe] = useState(true);

  const gradientProps = {
    colors: [colors.LIGHT_ORANGE, colors.ORANGE],
    style: styles.gradient,
    start: {x: 0.0, y: 0.5},
    end: {x: 0.5, y: 1.0},
    locations: [0.1, 1.0],
  };

  return (
    <View style={styles.body}>
      <AppHeader
        title="Book table"
        leftIcon="west"
        leftFunc={() => navigation.goBack()}
        rightFunc={() => navigation.navigate('HomeScreen')}
      />
      <View style={styles.imageBox}>
        <Image source={TABLE} style={styles.image} />
      </View>
      <View style={styles.container}>
        <Text style={styles.text}>Left 8 available table</Text>

        <View style={styles.divider} />

        <View style={[styles.section, styles.switchBox]}>
          <Text style={styles.text}>Terrace</Text>
          <Switch
            trackColor={{true: colors.ORANGE, false: colors.LIGHT_BLUE}}
            thumbColor={colors.WHITE}
            value={rememberMe}
            onValueChange={value => setRememberMe(value)}
          />
          <Text style={styles.text}>Inside</Text>
        </View>

        <View style={styles.section}>
          <Text style={styles.text}>How many peaple?</Text>
          <Counter />
        </View>

        <View style={styles.timeBox}>
          <Text style={styles.text}>Available time</Text>
          <View style={styles.section}>
            {availableTimes.map((item, index) => (
              <LinearGradient key={index.toString()} {...gradientProps}>
                <Button
                  containerStyle={styles.buttonContainer}
                  buttonStyle={styles.timeButton}
                  title={item}
                />
              </LinearGradient>
            ))}
          </View>
        </View>

        <View style={[styles.section, styles.reservBox]}>
          <Text style={styles.text}>Reservation:</Text>
          <Text style={[styles.text, styles.reservText]}>Today May 3</Text>
        </View>
      </View>
    </View>
  );
}

function Counter() {
  const styles = useMemo(() => createStyles(), []);
  const [count, setCount] = useState(4);

  const increment = () => {
    setCount(count + 1);
  };

  const decrement = () => {
    if (count > 1) {
      setCount(count - 1);
    }
  };

  return (
    <View style={styles.counterBox}>
      <View style={styles.countTextBox}>
        <Text style={[styles.text, styles.countText]}>{count}</Text>
      </View>

      <Button
        onPress={decrement}
        containerStyle={styles.iconButtonBox}
        buttonStyle={styles.iconButton}
        icon={{
          name: 'remove',
          color: colors.WHITE,
          size: 25,
        }}
      />
      <Button
        onPress={increment}
        containerStyle={styles.iconButtonBox}
        buttonStyle={styles.iconButton}
        icon={{
          name: 'add',
          color: colors.WHITE,
          size: 25,
        }}
      />
    </View>
  );
}
