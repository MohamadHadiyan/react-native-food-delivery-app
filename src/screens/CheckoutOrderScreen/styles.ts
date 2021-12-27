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
    counterBox: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      marginBottom: 15,
    },
    countText: {
      fontWeight: 'bold',
      paddingHorizontal: 30,
    },
    iconButtonBox: {
      borderRadius: 20,
      elevation: 8,
      shadowColor: colors.BLACK,
    },
    iconButton: {
      width: 40,
      height: 40,
      backgroundColor: colors.DARKEN,
      padding: 0,
      margin: 0,
    },
    buttonBox: {
      padding: 20,
      paddingTop: 0,
    },
    toTimeBox: {
      flexDirection: 'row',
      alignItems: 'center',
      paddingHorizontal: 20,
      marginVertical: 10,
    },
    toTime: {
      backgroundColor: colors.DARK_2,
      width: 170,
      borderRadius: 10,
      padding: 7,
      elevation: 15,
      shadowColor: colors.BLACK,
      marginLeft: 20,
      borderColor: colors.DARKEN,
      borderWidth: 2,
    },
    totalBox: {
      paddingHorizontal: 20,
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
      marginBottom: 20,
    },
    button: {
      marginTop: 0,
      height: RFValue(40),
      borderRadius: 10,
      paddingHorizontal: 20,
      elevation: 10,
      shadowColor: colors.BLACK,
    },
    textButton: {
      fontSize: RFValue(18),
      color: colors.WHITE,
    },
  });

export default createStyles;
