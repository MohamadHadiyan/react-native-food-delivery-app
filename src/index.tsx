import React from 'react';
import {StatusBar, StyleSheet, View} from 'react-native';
import Screens from './navigation';

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar
        barStyle="light-content"
        backgroundColor="transparent"
        translucent
      />
      <Screens />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
