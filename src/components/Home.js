import React from 'react';
import {
  View,
  Text,
  ScrollView,
  FlatList,
} from 'react-native';

const Home = () => {
  return (
    <ScrollView>
      <View>
        <Text> Lista </Text>
      </View>
      <FlatList
        data={[10, 20, 30]}
        renderItem={({item}) => <View><Text>{item}</Text></View>}
      />
    </ScrollView>
  );
}

export default Home;
