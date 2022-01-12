import {StyleSheet} from 'react-native';
import {colors} from '../../constants/colors';

const createStyles = () =>
  StyleSheet.create({
    headerContainer: {
      height: 70,
      width: '100%',
      borderBottomWidth: 0,
      alignItems: 'center',
      justifyContent: 'flex-start',
      paddingTop: 0,
      paddingBottom: 0,
    },
    title: {
      flex: 1,
      paddingTop: 3,
      textAlign: 'center',
    },
    iconButtonBox: {
      borderRadius: 20,
    },
    iconButton: {
      width: 40,
      height: 40,
      backgroundColor: 'transparent',
      padding: 0,
      margin: 0,
    },
    centerBox: {
      width: '100%',
      height: 30,
    },
    badge: {
      backgroundColor: colors.RED,
      borderWidth: 0,
      height: 22,
      width: 22,
      borderRadius: 11,
      position: 'absolute',
      bottom: 15,
      left: 18,
    },
  });

export default createStyles;
