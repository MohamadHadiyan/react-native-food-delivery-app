import React, {useMemo, useState} from 'react';
import {Pressable, View} from 'react-native';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import LinearGradient from 'react-native-linear-gradient';
import {Button, Input, Text} from 'react-native-elements';
import {RootStackParamList} from '../../constants/TypeScript';
import {colors} from '../../constants/colors';
import createStyles from './styles';

type Props = NativeStackScreenProps<RootStackParamList, 'RegisterScreen'>;

export default function RegisterScreen({navigation}: Props) {
  const styles = useMemo(() => createStyles(), []);
  const [account, setAccount] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);

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
      <View style={styles.center}>
        <Text h2 style={styles.title}>
          Create an account
        </Text>
        <View style={styles.accountBox}>
          <View style={styles.inputContainer}>
            <Input
              leftIcon={{
                name: 'user',
                type: 'font-awesome',
                color: colors.LIGHT_GREY,
              }}
              value={account}
              onChangeText={text => setAccount(text)}
              placeholderTextColor={colors.GREY}
              inputStyle={styles.input}
              placeholder="name"
              keyboardAppearance="dark"
              autoCompleteType
              errorMessage=""
            />
            <Input
              leftIcon={{
                name: 'email',
                type: 'material-icons',
                color: colors.LIGHT_GREY,
              }}
              value={account}
              onChangeText={text => setAccount(text)}
              placeholderTextColor={colors.GREY}
              inputStyle={styles.input}
              placeholder="Phone number or email address"
              keyboardAppearance="dark"
              autoCompleteType
              errorMessage=""
            />
            <Input
              leftIcon={{
                name: 'lock',
                type: 'material-icons',
                color: colors.LIGHT_GREY,
              }}
              rightIcon={{
                name: showPassword ? 'visibility-off' : 'visibility',
                type: 'material-icons',
                color: colors.LIGHT_GREY,
                onPress: () => setShowPassword(!showPassword),
              }}
              value={password}
              onChangeText={text => setPassword(text)}
              placeholderTextColor={colors.GREY}
              inputStyle={styles.input}
              placeholder="Password"
              textContentType="password"
              keyboardAppearance="dark"
              secureTextEntry
              autoCompleteType
              errorMessage=""
            />
          </View>
        </View>
        <Button
          onPress={() => navigation.navigate('HomeScreen')}
          title="Sign up"
          titleStyle={styles.textButton}
          containerStyle={styles.containerButton}
          buttonStyle={styles.button}
          style={styles.fullWidth}
          ViewComponent={LinearGradient}
          linearGradientProps={{
            colors: [colors.ORANGE, colors.LIGHT_ORANGE],
          }}
        />

        <Text style={styles.text}>Or</Text>

        <View style={styles.socialBox}>
          <View style={styles.socialButtonBox}>
            <Button
              title="Google+"
              titleStyle={styles.socialTitle}
              icon={{
                name: 'google',
                type: 'font-awesome',
                color: colors.RED,
              }}
              buttonStyle={styles.socialButton}
              containerStyle={styles.socialBtnContainer}
            />
            <Button
              title="Facebook"
              titleStyle={[styles.socialTitle, styles.marginLeft_5]}
              icon={{
                name: 'facebook',
                type: 'font-awesome',
                color: colors.BLUE,
              }}
              buttonStyle={styles.socialButton}
              containerStyle={styles.socialBtnContainer}
            />
          </View>

          <View style={styles.signupBox}>
            <Text style={styles.smallText}>Already have an account?</Text>
            <Pressable onPress={() => navigation.navigate('LoginScreen')}>
              <Text style={[styles.smallText, styles.signupLink]}>Sign in</Text>
            </Pressable>
          </View>
        </View>
      </View>
    </View>
  );
}
