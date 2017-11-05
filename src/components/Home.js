import React, { PureComponent } from 'react';
import { View, Text, ScrollView, FlatList } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

import List from '../actions/List';

class Home extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      listData: []
    };
  }

  componentWillMount() {
    console.log('props', this.props);
    List(this.props.navigation.state.params.name).then(listData => {
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
            justifyContent: 'flex-end',
            alignItems: 'flex-end',
            alignSelf: 'stretch',
            flexDirection: 'row'
          }}
        >
          <Ionicons name="ios-person" size={20} color="#000000" />
          <Text
            style={{
              fontSize: 12,
              marginLeft: 10
            }}
          >
            {this.props.navigation.state.params.name.toUpperCase()}
          </Text>
        </View>
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
