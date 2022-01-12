import {StyleSheet} from 'react-native';

const createStyles = () =>
  StyleSheet.create({
    size: {
      height: 60,
      width: '100%',
    },
    tabsWarper: {
      height: 60,
      width: '100%',
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-around',
    },
    gradient: {
      width: 40,
      height: 40,
    },
  });

export default createStyles;
