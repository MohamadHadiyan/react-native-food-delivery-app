import {StyleSheet} from 'react-native';
import {colors} from '../../constants/colors';

const createStyles = () =>
  StyleSheet.create({
    bottomSheet: {
      position: 'absolute',
      bottom: 0,
      left: 0,
      right: 0,
      paddingTop: 10,
      backgroundColor: colors.DARKEN,
      borderTopLeftRadius: 20,
      borderTopRightRadius: 20,
      elevation: 12,
      shadowColor: colors.BLACK,
    },
  });

export default createStyles;
