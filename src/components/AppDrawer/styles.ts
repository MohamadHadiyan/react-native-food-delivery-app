import {StyleSheet} from 'react-native';
import {colors} from '../../constants/colors';

const createStyles = () =>
  StyleSheet.create({
    container: {
      flex: 1,
      width: 281,
    },
    profileBox: {
      width: '100%',
      height: 230,
      alignItems: 'center',
      justifyContent: 'center',
      top: 25,
      borderBottomColor: colors.GREY_2,
      borderBottomWidth: 2,
    },
    avatar: {
      width: 120,
      height: 120,
      borderRadius: 62,
      marginBottom: 15,
    },
    usernameText: {
      color: colors.WHITE,
      fontSize: 23,
    },
    label: {
      fontSize: 16,
      color: colors.GREY_4,
      textShadowColor: colors.WHITE,
      textShadowRadius: 2,
    },
    logoutItem: {
      marginBottom: 65,
    },
  });

export default createStyles;
