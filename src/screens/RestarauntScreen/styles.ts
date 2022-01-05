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
    cardBox: {
      paddingHorizontal: RFValue(15),
    },
    fullWidth: {
      width: '100%',
    },
    title: {
      fontSize: RFValue(20),
      color: colors.DARK,
      textShadowColor: colors.DARK,
      textShadowRadius: 2,
    },
    flexRow: {
      flexDirection: 'row',
    },
    menuItem: {
      backgroundColor: colors.GREY,
      borderRadius: 20,
      marginRight: 5,
      marginBottom: 15,
    },
    menuButton: {
      paddingHorizontal: 20,
      paddingVertical: 5,
      backgroundColor: colors.NONE,
    },
    buttonBox: {
      justifyContent: 'space-evenly',
      flexDirection: 'row',
    },
    darkText: {
      color: colors.DARKEN,
      textShadowColor: colors.DARKEN,
      textShadowRadius: 2,
    },
    text: {
      color: colors.WHITE,
      textShadowColor: colors.WHITE,
      textShadowRadius: 2,
      fontSize: RFValue(16),
    },
    hight_300: {
      height: RFValue(300),
    },
    dot: {
      marginBottom: 30,
    },
    header: {
      backgroundColor: '#000a',
      position: 'absolute',
      top: 0,
      left: 0,
    },
    heartIcon: {
      position: 'absolute',
      top: RFValue(80),
      right: 10,
      backgroundColor: '#000a',
      borderRadius: 6,
      padding: 4,
    },
    content: {
      backgroundColor: colors.LIGHT_ORANGE,
      flex: 1,
    },
    scrollContent: {
      padding: 20,
      paddingTop: 30,
    },
    titleBox: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      marginBottom: 8,
    },
    status: {
      backgroundColor: colors.DARKEN,
      height: 28,
      width: 60,
      alignItems: 'center',
      borderRadius: 13,
      borderWidth: 3,
      borderColor: colors.ORANGE,
    },
    tagsBox: {
      flexDirection: 'row',
      marginTop: 10,
      alignItems: 'center',
    },
    tag: {
      backgroundColor: colors.LIGHT,
      paddingHorizontal: 10,
      paddingVertical: 2,
      borderRadius: 4,
      marginRight: 10,
      elevation: 10,
      shadowColor: colors.BLACK,
    },
    ratingBox: {
      marginTop: 10,
    },
    rating: {
      marginLeft: 5,
      marginRight: 10,
    },
    bottomSheet: {
      position: 'absolute',
      bottom: 0,
      left: 0,
      right: 0,
      paddingTop: 10,
      backgroundColor: colors.DARKEN,
      borderTopLeftRadius: 20,
      borderTopRightRadius: 20,
      elevation: 12,
      shadowColor: colors.BLACK,
    },
    menuList: {
      paddingHorizontal: 10,
    },
    menuTitle: {
      fontSize: RFValue(20),
      color: colors.WHITE,
      marginBottom: 10,
      textAlign: 'center',
      textShadowColor: colors.WHITE,
      textShadowRadius: 2,
    },
    flatlistMenu: {
      height: 400,
    },
    flatlistMenuBox: {
      paddingBottom: 40,
      paddingLeft: 10,
    },
    verifiedBox: {
      position: 'absolute',
      backgroundColor: colors.WHITE,
      width: 20,
      height: 20,
      top: 0,
      left: 0,
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
