import React from 'react';
import { Text, View, StyleSheet } from 'react-native';

export const MainScreen = () => {
  return (
    <View style={styles.center}>
      <Text>Main Screen</Text>
    </View>
  );
};

MainScreen.navigationOptions = {
  headerTitle: 'Current Weather'
}

const styles = StyleSheet.create({
  center: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
})