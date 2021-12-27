import {StyleSheet} from 'react-native';
import {RFValue} from 'react-native-responsive-fontsize';
import {colors} from '../../constants/colors';

const createStyles = () =>
  StyleSheet.create({
    body: {
      flex: 1,
      backgroundColor: colors.DARK,
      alignItems: 'center',
    },
    center: {
      justifyContent: 'center',
      alignItems: 'center',
    },
    circleContainerShadow: {
      top: -100,
    },
    circle: {
      width: 800,
      height: 400,
      backgroundColor: colors.DARKEN,
      borderBottomLeftRadius: 400,
      borderBottomRightRadius: 400,
      alignItems: 'center',
      marginBottom: 0,
    },
    titleBox: {
      top: 60,
      maxWidth: 300,
      height: 60,
      paddingHorizontal: 10,
    },
    orderText: {
      marginLeft: 10,
      textAlign: 'left',
    },
    scroll: {
      marginTop: -20,
    },
    content: {
      paddingHorizontal: 10,
      alignItems: 'center',
    },
    detailBox: {
      justifyContent: 'space-evenly',
      width: '100%',
      flexDirection: 'row',
      marginBottom: 10,
    },
    detail: {
      flexDirection: 'row',
      alignItems: 'center',
    },
    priceBox: {
      marginTop: 70,
      backgroundColor: colors.DARK,
      paddingHorizontal: 18,
      paddingVertical: 4,
      borderRadius: 24,
    },
    text: {
      fontSize: RFValue(18),
      color: colors.WHITE,
      fontWeight: 'bold',
      textAlign: 'center',
    },
    textLeft: {
      textAlign: 'left',
    },
    smallText: {
      fontSize: RFValue(14),
    },
    descText: {
      paddingHorizontal: 30,
      color: colors.LIGHT_GREY,
      textAlign: 'center',
      fontSize: RFValue(15),
    },
    imageWraper: {
      top: 20,
      borderRadius: 100,
      alignItems: 'center',
      justifyContent: 'center',
    },
    image: {
      width: 200,
      height: 200,
      borderRadius: 100,
    },
    nextImageWraper: {
      top: 10,
      right: -150,
      borderRadius: 60,
      alignItems: 'center',
      justifyContent: 'center',
      shadowColor: colors.BLACK,
      elevation: 15,
      position: 'absolute',
    },
    prevImageWraper: {
      top: 10,
      left: -150,
      borderRadius: 60,
      alignItems: 'center',
      justifyContent: 'center',
      shadowColor: colors.BLACK,
      elevation: 15,
      position: 'absolute',
    },
    nextImage: {
      width: 120,
      height: 120,
      borderRadius: 60,
      opacity: 0.5,
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
      justifyContent: 'space-evenly',
      flexDirection: 'row',
      marginTop: 30,
    },
    containerButton: {
      borderRadius: 0,
      alignItems: 'center',
      height: RFValue(55),
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
    checkOrderShadowView: {
      width: '100%',
      height: 70,
    },
    checkOrderShadowContainer: {
      position: 'absolute',
      bottom: 0,
      width: '100%',
    },
    checkOrderGradient: {
      position: 'absolute',
      bottom: 0,
      width: '100%',
      height: 70,
      alignItems: 'center',
      justifyContent: 'center',
    },
    showMoreButtonBox: {
      width: 40,
      position: 'absolute',
      right: 0,
      bottom: -20,
    },
  });

export default createStyles;
