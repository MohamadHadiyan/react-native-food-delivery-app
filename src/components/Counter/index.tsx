import React, {useMemo, useState} from 'react';
import {View} from 'react-native';
import {Button, Text} from 'react-native-elements';
import LinearGradient from 'react-native-linear-gradient';
import {colors} from '../../constants/colors';
import createStyles from './styles';

interface IProps {
  defaultValue?: number;
}

export default function Counter({defaultValue = 1}: IProps) {
  const styles = useMemo(() => createStyles(), []);
  const [count, setCount] = useState(defaultValue);

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
      <Button
        onPress={decrement}
        containerStyle={styles.iconButtonBox}
        buttonStyle={styles.iconButton}
        ViewComponent={LinearGradient}
        linearGradientProps={{
          colors: [colors.GREY_2, colors.DARK],
        }}
        icon={{
          name: 'remove',
          color: colors.WHITE,
          size: 20,
        }}
      />
      <Text style={[styles.text, styles.countText]}>{count}</Text>
      <Button
        onPress={increment}
        containerStyle={styles.iconButtonBox}
        buttonStyle={styles.iconButton}
        ViewComponent={LinearGradient}
        linearGradientProps={{
          colors: [colors.GREY_2, colors.DARK],
        }}
        icon={{
          name: 'add',
          color: colors.WHITE,
          size: 20,
        }}
      />
    </View>
  );
}
