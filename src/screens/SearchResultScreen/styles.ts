import {StyleSheet} from 'react-native';
import {colors} from '../../constants/colors';

const createStyles = () =>
  StyleSheet.create({
    body: {
      flex: 1,
      backgroundColor: colors.DARK,
    },
    scroll: {
      paddingHorizontal: 10,
      paddingBottom: 10,
    },
    fullWidth: {
      width: '100%',
    },
  });

export default createStyles;
