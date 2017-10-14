import React from 'react';
import {
  View,
  Text,
  ScrollView,
  FlatList,
} from 'react-native';

const Home = () => {
  return (
    <View
      style={{
        flex: 1,
        flexDirection: 'column',
      }}
    >
      <View
        style={{
          justifyContent: 'center',
          alignItems: 'center',
          // flex: 1,
          borderWidth: 1,
        }}
      >
        <Text
          style={{
            fontSize: 30,
          }}
        >
          GitHub List
        </Text>
      </View>
      <View
        style={{
          flex: 1,
        }}
      >
        <FlatList
          data={[
            {
              id: 1,
              name: 'a',
            },
            {
              id: 2,
              name: 'b',
            },
            {
              id: 3,
              name: 'c',
            }
          ]}
          renderItem={({item}) => <View style={{ borderBottomWidth: 1, borderColor: '#C1C1C1' }}><Text style={{ fontSize: 26 }}>{item.name}</Text></View>}
          style={{
            flex: 1,
          }}
        />
      </View>
    </View>
  );
}

export default Home;
