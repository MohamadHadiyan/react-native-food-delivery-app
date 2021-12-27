import {Platform, StyleSheet} from 'react-native';
import {RFValue} from 'react-native-responsive-fontsize';
import {colors} from '../../constants/colors';

export const CELL_SIZE = 50;
export const CELL_BORDER_RADIUS = 8;

const createStyles = () =>
  StyleSheet.create({
    body: {
      flex: 1,
      backgroundColor: colors.DARK,
    },
    backButtonBox: {
      width: 50,
      marginLeft: 10,
      borderRadius: 30,
      marginTop: 30,
    },
    backButton: {
      width: 50,
      height: 50,
      borderRadius: 30,
      backgroundColor: 'transparent',
    },
    container: {
      width: '100%',
      paddingHorizontal: RFValue(20),
      marginTop: 40,
    },
    center: {
      justifyContent: 'center',
      alignItems: 'center',
    },
    title: {
      color: colors.ORANGE,
      marginTop: 20,
      textAlign: 'center',
      marginBottom: 10,
    },
    text: {
      fontSize: RFValue(18),
      color: colors.LIGHT_GREY,
      textAlign: 'center',
    },
    inputContainer: {
      width: '100%',
      padding: 20,
      backgroundColor: colors.DARKEN,
      borderRadius: 12,
      elevation: 10,
      shadowColor: colors.BLACK,
      marginVertical: RFValue(40),
    },
    cell: {
      height: 50,
      width: 50,
      lineHeight: 45,
      ...Platform.select({web: {lineHeight: 65}}),
      justifyContent: 'center',
      alignItems: 'center',
      borderRadius: 8,
      color: colors.WHITE,
      borderColor: colors.GREY,
      borderWidth: 2,
    },
    focusCell: {
      borderColor: colors.ORANGE,
    },
    cellText: {
      color: colors.WHITE,
      fontSize: 25,
    },
    dashCell: {
      width: 12,
      height: 3,
      borderRadius: 4,
      backgroundColor: colors.GREY,
      position: 'absolute',
    },
    fullWidth: {
      width: '100%',
    },
    containerButton: {
      width: '100%',
      height: RFValue(75),
      paddingHorizontal: RFValue(20),
    },
    button: {
      height: RFValue(50),
      borderRadius: 5,
      elevation: 10,
      shadowColor: colors.LIGHT_ORANGE,
    },
    textButton: {
      textTransform: 'uppercase',
      fontSize: RFValue(18),
      color: colors.WHITE,
    },
    textLink: {
      color: colors.LIGHT_ORANGE,
      marginLeft: 10,
    },
  });

export default createStyles;
