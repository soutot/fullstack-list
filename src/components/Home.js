import React, { PureComponent } from 'react';
import { View, Text, ScrollView, FlatList } from 'react-native';

import List from '../actions/List';

class Home extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      listData: []
    };
  }

  componentWillMount() {
    List(this.props.token).then(listData => {
      this.setState({
        listData
      });
    });
  }

  render() {
    return (
      <View
        style={{
          flex: 1,
          flexDirection: 'column',
          margin: 10
        }}
      >
        <View
          style={{
            justifyContent: 'center',
            alignItems: 'center'
            // flex: 1,
          }}
        >
          <Text
            style={{
              fontSize: 30
            }}
          >
            GitHub List
          </Text>
        </View>
        <View
          style={{
            flex: 1
          }}
        >
          <FlatList
            data={this.state.listData}
            renderItem={({ item }) => {
              return (
                <View style={{ borderBottomWidth: 1, borderColor: '#C1C1C1' }}>
                  <Text style={{ fontSize: 26 }}>{item.node.name}</Text>
                </View>
              );
            }}
            style={{
              flex: 1
            }}
          />
        </View>
      </View>
    );
  }
}

export default Home;
