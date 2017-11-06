import React from 'react';
import { FlatList } from 'react-native';
import ListItem from './ListItem';

const List = ({ data }) => {
  return (
    <FlatList
      data={data}
      renderItem={({ item }) => <ListItem item={item} />}
      keyExtractor={(item, index) => item.node.id}
      style={{
        flex: 1
      }}
    />
  );
};

export default List;
