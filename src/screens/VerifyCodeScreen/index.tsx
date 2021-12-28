import React, {useMemo, useState} from 'react';
import {Pressable, View} from 'react-native';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import LinearGradient from 'react-native-linear-gradient';
import {Button, Text} from 'react-native-elements';
import {
  CodeField,
  Cursor,
  useBlurOnFulfill,
  useClearByFocusCell,
} from 'react-native-confirmation-code-field';
import {colors} from '../../constants/colors';
import createStyles from './styles';
import {AuthStackParamList} from '../../constants/TypeScript';

type Props = NativeStackScreenProps<AuthStackParamList, 'VerifyCodeScreen'>;
const CELL_COUNT = 5;

export default function VerifyCodeScreen({navigation}: Props) {
  const styles = useMemo(() => createStyles(), []);
  const [value, setValue] = useState('');
  const ref = useBlurOnFulfill({value, cellCount: CELL_COUNT});
  const [props, getCellonLayoutHandler] = useClearByFocusCell({
    value,
    setValue,
  });

  return (
    <View style={styles.body}>
      <Button
        onPress={() => navigation.goBack()}
        containerStyle={styles.backButtonBox}
        buttonStyle={styles.backButton}
        icon={{
          name: 'west',
          type: 'material-icons',
          color: colors.LIGHT_ORANGE,
          size: 28,
        }}
      />
      <View style={styles.container}>
        <View style={styles.center}>
          <Text h3 style={styles.title}>
            Enter the code to verify your email
          </Text>
          <Text style={styles.text}>We have sent you email with a code to</Text>
          <Text style={[styles.text, styles.textLink]}>
            {'hadiyandev@gamil.com'}
          </Text>
        </View>

        <View style={styles.inputContainer}>
          <CodeField
            ref={ref}
            {...props}
            value={value}
            onChangeText={setValue}
            cellCount={CELL_COUNT}
            keyboardType="number-pad"
            textContentType="oneTimeCode"
            renderCell={({index, symbol, isFocused}) => (
              <View
                key={index}
                style={[styles.cell, isFocused && styles.focusCell]}
                onLayout={getCellonLayoutHandler(index)}>
                <Text style={styles.cellText}>
                  {symbol || (isFocused ? <Cursor /> : null)}
                </Text>
                {!symbol && !isFocused && <View style={styles.dashCell} />}
              </View>
            )}
          />
        </View>
      </View>

      <Button
        onPress={() => navigation.navigate('HomeStack')}
        title="Vrify now"
        titleStyle={styles.textButton}
        containerStyle={styles.containerButton}
        buttonStyle={styles.button}
        style={styles.fullWidth}
        ViewComponent={LinearGradient}
        linearGradientProps={{
          colors: [colors.ORANGE, colors.LIGHT_ORANGE],
        }}
      />

      <View style={styles.center}>
        <Text style={styles.text}>Don't receive a code?</Text>
        <Pressable onPress={() => navigation.navigate('LoginScreen')}>
          <Text style={[styles.text, styles.textLink]}>Resend Code</Text>
        </Pressable>
      </View>
    </View>
  );
}
