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
      fontSize: RFValue(17),
      color: colors.GREY_4,
      textShadowColor: colors.BLACK,
      textShadowOffset: {height: 1, width: 1},
      textShadowRadius: 2,
    },
    buttonContainer: {
      borderRadius: 20,
    },
    iconButtonBox: {
      borderRadius: 20,
      marginHorizontal: 2,
    },
    iconButton: {
      width: 35,
      height: 35,
      paddingHorizontal: 0,
      paddingVertical: 5,
      backgroundColor: 'transparent',
      borderRadius: 20,
    },
    counterBox: {
      flexDirection: 'row',
      alignItems: 'center',
    },
    countTextBox: {
      backgroundColor: colors.GREY_2,
      height: 32,
      width: 60,
      alignItems: 'center',
      borderRadius: 16,
      elevation: 3,
      shadowColor: colors.BLACK,
    },
    countText: {
      paddingTop: 2,
      color: colors.WHITE,
    },
    imageBox: {
      height: 280,
      alignItems: 'center',
      justifyContent: 'center',
    },
    image: {
      width: 200,
      height: 200,
    },
    container: {
      paddingHorizontal: 20,
    },
    switchBox: {
      marginHorizontal: 70,
    },
    divider: {
      width: '100%',
      height: 4,
      borderBottomColor: '#55545e',
      borderTopColor: '#141418',
      borderBottomWidth: 2,
      borderTopWidth: 2,
      borderRadius: 2,
      marginVertical: 5,
    },
    section: {
      justifyContent: 'space-between',
      flexDirection: 'row',
      marginTop: 20,
    },
    timeBox: {
      marginTop: 20,
    },
    gradient: {
      borderRadius: 25,
      alignItems: 'center',
      justifyContent: 'center',
      width: 82,
      height: 46,
    },
    timeButton: {
      backgroundColor: colors.DARK_2,
      borderRadius: 25,
    },
    reservBox: {
      marginTop: 30,
      justifyContent: 'flex-start',
    },
    reservText: {
      color: colors.ORANGE,
      marginLeft: 10,
    },
  });

export default createStyles;
