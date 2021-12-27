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
    gradient: {
      position: 'absolute',
      top: 0,
      left: 0,
      bottom: 0,
      right: 0,
    },
    logo: {
      width: RFValue(150),
      height: RFValue(150),
      marginTop: RFValue(30),
      marginBottom: 10,
    },
    title: {
      fontSize: RFValue(25),
      fontWeight: '600',
      color: colors.LIGHT,
      textAlign: 'center',
      marginTop: RFValue(20),
    },
    slide: {
      paddingHorizontal: 10,
    },
    image: {
      width: '100%',
      height: RFValue(300),
      borderRadius: 20,
    },
    containerButton: {
      width: RFValue(100),
    },
    button: {
      height: RFValue(60),
      width: RFValue(60),
      borderRadius: RFValue(30),
      elevation: 10,
      shadowColor: colors.BLACK,
      marginTop: 10,
      marginBottom: 20,
    },
  });

export default createStyles;
