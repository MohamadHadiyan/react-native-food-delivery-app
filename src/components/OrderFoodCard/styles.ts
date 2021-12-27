import {StyleSheet} from 'react-native';
import {RFValue} from 'react-native-responsive-fontsize';
import {colors} from '../../constants/colors';

const createStyles = () =>
  StyleSheet.create({
    cardContainer: {
      height: 80,
      borderWidth: 0,
      borderRadius: 45,
      borderTopRightRadius: 15,
      borderBottomRightRadius: 15,
      paddingRight: 0,
      paddingTop: 2,
      elevation: 10,
      shadowColor: colors.BLACK,
      marginTop: 10,
      marginBottom: 20,
      backgroundColor: '#0000',
    },
    cardWraper: {
      flexDirection: 'row',
      borderRadius: 15,
      elevation: 10,
      shadowRadius: 10,
      backgroundColor: colors.DARKEN,
    },
    imageContainer: {
      width: 80,
      height: 80,
      borderRadius: 45,
      left: -15,
    },
    imageWraper: {
      borderRadius: 45,
      position: 'absolute',
      bottom: -5,
      alignItems: 'center',
      justifyContent: 'center',
      shadowColor: colors.BLACK,
      elevation: 10,
    },
    image: {
      width: 90,
      height: 90,
      borderRadius: 45,
    },
    cardbody: {
      paddingLeft: 10,
    },
    titleBox: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
    },
    title: {
      fontSize: RFValue(16),
      color: colors.WHITE,
      fontWeight: 'bold',
      width: RFValue(180),
      height: 22,
    },
    priceBox: {
      alignItems: 'center',
      flexDirection: 'row',
      justifyContent: 'space-between',
    },
    text: {
      fontSize: RFValue(18),
      fontWeight: '800',
      color: colors.WHITE,
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
  });

export default createStyles;
