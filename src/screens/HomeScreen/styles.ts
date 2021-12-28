import {StyleSheet} from 'react-native';
import {RFValue} from 'react-native-responsive-fontsize';
import {colors} from '../../constants/colors';

const createStyles = () =>
  StyleSheet.create({
    body: {
      flex: 1,
      backgroundColor: colors.DARK,
      paddingBottom: 60,
    },
    center: {
      justifyContent: 'center',
      alignItems: 'center',
    },
    headerContainer: {
      height: 80,
      shadowColor: colors.BLACK,
      elevation: 5,
      borderBottomWidth: 0,
    },
    searchBox: {
      paddingHorizontal: 10,
      flexDirection: 'row',
      alignItems: 'center',
      width: '100%',
    },
    searchInputContainer: {
      borderBottomWidth: 0,
      height: 40,
    },
    searchContainer: {
      backgroundColor: colors.DARKEN,
      height: 40,
      flex: 1,
      borderRadius: 8,
      marginRight: 10,
    },
    searchInput: {
      fontSize: 20,
      fontStyle: 'italic',
      color: colors.WHITE,
      paddingBottom: 8,
    },
    text: {
      fontSize: RFValue(18),
      fontWeight: '300',
      color: colors.WHITE,
    },
    title: {
      color: colors.WHITE,
      fontSize: 22,
      fontWeight: '600',
      marginLeft: 10,
    },
    buttonContainer: {
      height: 40,
    },
    iconButton: {
      padding: 0,
      backgroundColor: 'transparent',
    },
  });

export default createStyles;
