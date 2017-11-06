import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const ListItem = ({ item }) => {
  return (
    <View style={styles.item}>
      <Text style={styles.itemText}>{item.node.name}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  item: {
    borderBottomWidth: 1,
    borderColor: '#C1C1C1'
  },
  itemText: {
    fontSize: 26
  }
});

export default ListItem;
