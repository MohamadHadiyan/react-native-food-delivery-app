import {StyleSheet} from 'react-native';
import {RFValue} from 'react-native-responsive-fontsize';
import {colors} from '../../constants/colors';

const createStyles = () =>
  StyleSheet.create({
    text: {
      fontSize: RFValue(18),
      fontWeight: '800',
      color: colors.WHITE,
    },
    buttonContainer: {
      height: 35,
      borderRadius: 20,
    },
    iconButtonBox: {
      width: 32,
      height: 35,
      borderRadius: 20,
      elevation: 10,
      shadowColor: colors.BLACK,
    },
    marginTop_5: {
      marginTop: 5,
    },
    iconButton: {
      width: 30,
      height: 30,
      paddingHorizontal: 0,
      paddingVertical: 5,
      backgroundColor: 'transparent',
      shadowColor: colors.BLACK,
      elevation: 10,
      borderRadius: 20,
    },
    counterBox: {
      flexDirection: 'row',
      justifyContent: 'flex-start',
    },
    countText: {
      paddingHorizontal: 20,
    },
  });

export default createStyles;
