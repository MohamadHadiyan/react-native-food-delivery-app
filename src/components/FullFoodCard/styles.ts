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
      paddingLeft: 20,
      marginBottom: 15,
      height: 100,
      backgroundColor: colors.NONE,
    },
    cardWraper: {
      flexDirection: 'row',
      borderRadius: 15,
      height: 100,
      shadowColor: colors.BLACK,
      shadowRadius: 15,
      elevation: 10,
      backgroundColor: colors.DARKEN,
    },
    imageContainer: {
      left: -35,
    },
    imageWraper: {
      borderRadius: 60,
      alignItems: 'center',
      justifyContent: 'center',
      shadowColor: colors.BLACK,
      elevation: 10,
    },
    image: {
      width: 100,
      height: 100,
      borderRadius: 60,
    },
    cardbody: {
      left: -20,
      paddingVertical: 10,
    },
    title: {
      fontSize: 16,
      color: colors.WHITE,
      width: 220,
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
