import {StyleSheet} from 'react-native';
import {RFValue} from 'react-native-responsive-fontsize';
import {colors} from '../../constants/colors';

const createStyles = () =>
  StyleSheet.create({
    body: {
      flex: 1,
      backgroundColor: colors.DARK,
    },
    center: {
      justifyContent: 'center',
      alignItems: 'center',
    },
    text: {
      fontSize: RFValue(18),
      color: colors.WHITE,
      fontWeight: 'bold',
    },
    iconButtonBox: {
      borderRadius: 50,
      backgroundColor: colors.NONE,
      width: 100,
      height: 100,
      alignItems: 'center',
      justifyContent: 'center',
    },
    iconButton: {
      width: 100,
      height: 100,
      backgroundColor: 'transparent',
      padding: 0,
      margin: 0,
    },
  });

export default createStyles;
