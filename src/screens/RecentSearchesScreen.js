import React from 'react';
import { Text, View, StyleSheet } from 'react-native';

export const RecentSearchesScreen = ({}) => {
  return (
    <View style={styles.center}>
      <Text>Recent Searches</Text>
    </View>
  );
};

RecentSearchesScreen.navigationOptions = {
  headerTitle: 'Recent Searches'
}

const styles = StyleSheet.create({
  center: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
})
