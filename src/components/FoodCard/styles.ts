import {StyleSheet} from 'react-native';
import {RFValue} from 'react-native-responsive-fontsize';
import {colors} from '../../constants/colors';

const createStyles = () =>
  StyleSheet.create({
    cardContainer: {
      borderWidth: 0,
      borderRadius: 16,
      shadowColor: colors.BLACK,
      elevation: 10,
      padding: 0,
      marginTop: 45,
      marginBottom: 25,
      height: 160,
      backgroundColor: colors.DARKEN,
    },
    cardWraper: {
      borderRadius: 15,
      height: 160,
      shadowColor: colors.BLACK,
      shadowRadius: 15,
      elevation: 10,
      backgroundColor: colors.DARKEN,
    },
    imageContainer: {
      alignItems: 'center',
      height: 90,
    },
    imageWraper: {
      borderRadius: 60,
      top: -30,
      alignItems: 'center',
      justifyContent: 'center',
      shadowColor: colors.BLACK,
      elevation: 10,
    },
    image: {
      width: 115,
      height: 115,
      borderRadius: 60,
    },
    cardbody: {
      paddingHorizontal: 10,
    },
    title: {
      fontSize: 16,
      color: colors.WHITE,
      width: 120,
      height: 22,
    },
    detailBox: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      marginVertical: 3,
    },
    text: {
      fontSize: RFValue(18),
      fontWeight: '300',
      color: colors.WHITE,
    },
    priceText: {
      fontSize: RFValue(18),
      fontWeight: '800',
      color: colors.WHITE,
    },
    buttonContainer: {
      height: 35,
      borderRadius: 20,
    },
    iconButton: {
      paddingHorizontal: 0,
      paddingVertical: 5,
      backgroundColor: 'transparent',
      borderRadius: 20,
    },
  });

export default createStyles;
