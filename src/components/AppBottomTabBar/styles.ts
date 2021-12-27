import {StyleSheet} from 'react-native';

const createStyles = () =>
  StyleSheet.create({
    container: {
      width: '100%',
      height: 60,
      position: 'absolute',
      bottom: 0,
    },
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
