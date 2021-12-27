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
    logo: {
      width: RFValue(120),
      height: RFValue(120),
      marginTop: RFValue(30),
      marginBottom: RFValue(10),
    },
    title: {
      fontSize: RFValue(25),
      fontWeight: '600',
      color: colors.ORANGE,
      fontFamily: 'Roboto',
    },
    text: {
      fontSize: RFValue(18),
      color: colors.LIGHT_GREY,
    },
    smallText: {
      fontSize: RFValue(12),
      color: colors.LIGHT_GREY,
    },
    accountBox: {
      width: '100%',
      paddingHorizontal: RFValue(20),
      justifyContent: 'center',
      alignItems: 'center',
    },
    inputContainer: {
      width: '100%',
      padding: 10,
      backgroundColor: colors.DARKEN,
      borderRadius: 12,
      elevation: 10,
      shadowColor: colors.BLACK,
      marginVertical: RFValue(30),
      marginHorizontal: RFValue(20),
    },
    input: {
      color: colors.LIGHT,
    },
    switchBox: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      marginTop: 10,
      paddingHorizontal: 10,
    },
    rememberBox: {
      flexDirection: 'row',
      alignItems: 'center',
    },
    marginLeft_5: {
      marginLeft: 6,
    },
    fullWidth: {
      width: '100%',
    },
    containerButton: {
      width: '100%',
      height: RFValue(75),
      alignItems: 'center',
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
    socialBox: {
      width: '100%',
      paddingHorizontal: RFValue(20),
      justifyContent: 'center',
      alignItems: 'center',
      marginTop: RFValue(20),
    },
    socialTitle: {
      color: colors.LIGHT,
      fontSize: RFValue(18),
      paddingVertical: 6,
      paddingStart: 10,
    },
    socialButtonBox: {
      width: '100%',
      flexDirection: 'row',
      justifyContent: 'space-evenly',
    },
    socialButton: {
      backgroundColor: colors.DARKEN,
      justifyContent: 'flex-start',
    },
    socialBtnContainer: {
      marginBottom: 10,
      elevation: 6,
      shadowColor: colors.BLACK,
    },
    signupBox: {
      flexDirection: 'row',
      marginVertical: RFValue(20),
    },
    signupLink: {
      color: colors.LIGHT_ORANGE,
      marginLeft: 10,
    },
  });

export default createStyles;
