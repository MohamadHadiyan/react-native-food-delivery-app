import React, {useMemo, useState} from 'react';
import {Pressable, ScrollView, Switch, View} from 'react-native';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import LinearGradient from 'react-native-linear-gradient';
import {Button, Image, Input, Text} from 'react-native-elements';
import {AuthStackParamList} from '../../constants/TypeScript';
import {colors} from '../../constants/colors';
import createStyles from './styles';
import {LOGO} from '../../assets/images';

type Props = NativeStackScreenProps<AuthStackParamList, 'LoginScreen'>;

export default function LoginScreen({navigation}: Props) {
  const styles = useMemo(() => createStyles(), []);
  const [account, setAccount] = useState('');
  const [password, setPassword] = useState('');
  const [rememberMe, setRememberMe] = useState(true);
  const [showPassword, setShowPassword] = useState(false);

  return (
    <View style={[styles.body, styles.center]}>
      <ScrollView>
        <View style={styles.center}>
          <View style={styles.accountBox}>
            <Image source={LOGO} style={styles.logo} />
            <Text h3 style={styles.title}>
              Welcome Back
            </Text>
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

              <View style={styles.switchBox}>
                <View style={styles.rememberBox}>
                  <Switch
                    trackColor={{true: colors.ORANGE, false: colors.LIGHT_GREY}}
                    thumbColor={rememberMe ? colors.WHITE : colors.GREY}
                    value={rememberMe}
                    onValueChange={value => setRememberMe(value)}
                  />
                  <Text style={[styles.smallText, styles.marginLeft_5]}>
                    Remember me
                  </Text>
                </View>
                <Text style={styles.smallText}>Forgot Password?</Text>
              </View>
            </View>
          </View>

          <Button
            onPress={() => navigation.navigate('HomeStack')}
            title="Sign in"
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
              <Text style={styles.smallText}>Don't have an account?</Text>
              <Pressable onPress={() => navigation.navigate('RegisterScreen')}>
                <Text style={[styles.smallText, styles.signupLink]}>
                  Sign up
                </Text>
              </Pressable>
            </View>
          </View>
        </View>
      </ScrollView>
    </View>
  );
}
