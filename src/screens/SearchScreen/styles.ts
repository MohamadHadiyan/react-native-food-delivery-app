import {StyleSheet} from 'react-native';
import {RFValue} from 'react-native-responsive-fontsize';
import {colors} from '../../constants/colors';

const createStyles = () =>
  StyleSheet.create({
    body: {
      flex: 1,
      backgroundColor: colors.DARK,
      paddingTop: 34,
    },
    center: {
      justifyContent: 'center',
      alignItems: 'center',
    },
    text: {
      fontSize: RFValue(16),
      color: colors.WHITE,
      textShadowColor: colors.WHITE,
      textShadowRadius: 2,
    },
    title: {
      fontSize: RFValue(20),
      color: colors.WHITE,
      textShadowColor: colors.WHITE,
      textShadowRadius: 2,
    },
    searchBox: {
      flexDirection: 'row',
      alignItems: 'center',
      width: '100%',
    },
    searchInput: {
      fontSize: 20,
      fontStyle: 'italic',
      color: colors.WHITE,
      paddingBottom: 2,
    },
    searchOverlay: {
      color: colors.GREY,
      paddingBottom: 0,
    },
    searchContainer: {
      height: 50,
      backgroundColor: colors.DARK_2,
      borderRadius: 8,
      borderColor: colors.GREY_2,
      borderWidth: 3,
      elevation: 10,
      shadowColor: colors.BLACK,
      justifyContent: 'center',
      paddingLeft: 40,
      paddingHorizontal: 0,
    },
    iconButton: {
      padding: 0,
      backgroundColor: 'transparent',
    },
    westButton: {
      position: 'absolute',
      zIndex: 5,
      elevation: 11,
      shadowColor: colors.DARK_2,
      height: 30,
      marginHorizontal: 6,
      top: 8,
    },
    searchButton: {
      right: 0,
    },
    searchWrapper: {
      paddingHorizontal: 10,
      shadowColor: colors.BLACK,
      elevation: 8,
    },
    inputContainer: {
      borderBottomWidth: 0,
    },
    inputError: {
      height: 0,
      padding: 0,
    },
    modalBox: {
      padding: 10,
      backgroundColor: colors.DARK,
      flex: 1,
    },
    categoryBox: {
      padding: 10,
      marginTop: 5,
      borderRadius: 6,
    },
    categoryText: {
      color: colors.GREY_4,
      fontSize: 18,
    },
    foodBox: {
      flexDirection: 'row',
      width: '100%',
      flexWrap: 'wrap',
      marginBottom: 10,
    },
    food: {
      borderRadius: 20,
      padding: 5,
      margin: 5,
      backgroundColor: colors.DARKEN,
      alignItems: 'center',
      justifyContent: 'center',
    },
    foodImageBox: {
      elevation: 10,
      shadowColor: colors.BLACK,
      backgroundColor: colors.DARK,
      width: 100,
      height: 100,
      borderRadius: 50,
      marginBottom: 10,
    },
    foodImage: {
      borderRadius: 50,
      width: 100,
      height: 100,
    },
    restarauntImageBox: {
      elevation: 10,
      shadowColor: colors.BLACK,
      backgroundColor: colors.DARK,
      width: 150,
      height: 120,
      borderRadius: 20,
      marginBottom: 10,
    },
    restarauntImage: {
      borderRadius: 20,
      width: 150,
      height: 120,
    },
  });

export default createStyles;
