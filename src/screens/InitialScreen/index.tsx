import React, {useMemo} from 'react';
import {View, Text, ImageBackground} from 'react-native';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import LinearGradient from 'react-native-linear-gradient';
import {Button, Image} from 'react-native-elements';
import Swiper from 'react-native-swiper';
import {RootStackParamList} from '../../constants/TypeScript';
import {colors} from '../../constants/colors';
import createStyles from './styles';
import {
  GRILLED_BEEF,
  HEALTHY_ASIAN,
  INITIAL,
  LOGO,
  ROASTED_STEAK,
} from '../../assets/images';

type Props = NativeStackScreenProps<RootStackParamList, 'InitialScreen'>;

export default function InitialScreen({navigation}: Props) {
  const styles = useMemo(() => createStyles(), []);

  const iconOption = {
    name: 'east',
    type: 'material-icons',
    size: 28,
    color: colors.WHITE,
  };

  return (
    <ImageBackground
      source={INITIAL}
      style={[styles.body, styles.center]}
      blurRadius={10}>
      <LinearGradient
        colors={['#13131ace', '#13131a58']}
        style={styles.gradient}
      />
      <Image source={LOGO} style={styles.logo} />
      <Swiper
        autoplayTimeout={4}
        dotColor={colors.GREY_4}
        activeDotColor={colors.ORANGE}
        autoplay>
        <View style={styles.slide}>
          <Image source={ROASTED_STEAK} style={styles.image} />
          <Text style={styles.title}>Enjoy Instant Delivery and Payment</Text>
        </View>
        <View style={styles.slide}>
          <Image source={GRILLED_BEEF} style={styles.image} />
          <Text style={styles.title}>Quick delivery at your Doorstep</Text>
        </View>
        <View style={styles.slide}>
          <Image source={HEALTHY_ASIAN} style={styles.image} />
          <Text style={styles.title}>All Your Faourite Dishes</Text>
        </View>
      </Swiper>
      <View style={styles.center}>
        <Button
          onPress={() => navigation.navigate('LoginScreen')}
          icon={iconOption}
          containerStyle={[styles.containerButton, styles.center]}
          buttonStyle={styles.button}
          ViewComponent={LinearGradient}
          linearGradientProps={{
            colors: [colors.ORANGE, colors.LIGHT_ORANGE],
          }}
        />
      </View>
    </ImageBackground>
  );
}
