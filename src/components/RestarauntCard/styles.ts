import {StyleSheet} from 'react-native';
import {RFValue} from 'react-native-responsive-fontsize';
import {colors} from '../../constants/colors';

const createStyles = () =>
  StyleSheet.create({
    cardContainer: {
      width: RFValue(290),
      height: RFValue(210),
      backgroundColor: colors.DARK,
      marginBottom: 20,
      borderWidth: 0,
      borderRadius: 15,
      shadowColor: colors.BLACK,
      elevation: 10,
      padding: 0,
    },
    cardWraper: {
      borderRadius: 15,
      borderWidth: 0,
      shadowColor: colors.BLACK,
      elevation: 10,
      backgroundColor: colors.DARKEN,
    },
    image: {
      borderTopRightRadius: 15,
      borderTopLeftRadius: 15,
      height: RFValue(150),
    },
    cardBody: {
      height: RFValue(60),
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
      paddingHorizontal: 10,
    },
    text: {
      fontSize: RFValue(14),
      color: colors.GREY_3,
    },
    logoBox: {
      flexDirection: 'row',
      alignItems: 'flex-end',
      marginBottom: 3,
    },
    title: {
      color: colors.WHITE,
      fontSize: RFValue(18),
      marginLeft: 10,
      marginBottom: 0,
      fontWeight: '600',
      textAlign: 'left',
    },
    buttonContainer: {
      height: 40,
      borderRadius: 20,
    },
    iconButton: {
      paddingHorizontal: 0,
      paddingVertical: 5,
      backgroundColor: 'transparent',
      borderRadius: 20,
    },
    flexRow: {
      flexDirection: 'row',
    },
    rightContent: {
      flexDirection: 'row',
      alignItems: 'center',
    },
    verifiedBox: {
      position: 'absolute',
      backgroundColor: colors.WHITE,
      width: 28,
      height: 28,
      top: 5,
      right: 5,
      borderRadius: 15,
    },
    verifiedIcon: {
      position: 'absolute',
      top: -5,
      left: -3,
      right: 0,
      bottom: 0,
    },
  });

export default createStyles;
