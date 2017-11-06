import React, { PureComponent } from 'react';
import { View, Text, ScrollView, FlatList, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

import FetchList from '../helpers/FetchList';
import List from './List';

class Home extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      listData: []
    };
  }

  componentWillMount() {
    FetchList(this.props.navigation.state.params.name).then(listData => {
      this.setState({
        listData
      });
    });
  }

  render() {
    return (
      <View style={styles.contentContainer}>
        <View style={styles.myProfileContainer}>
          <Ionicons name="ios-person" size={20} color="#000000" />
          <Text style={styles.myProfileText}>
            {this.props.navigation.state.params.name.toUpperCase()}
          </Text>
        </View>
        <View style={styles.listHeader}>
          <Text style={styles.listHeaderText}>User List</Text>
        </View>
        <View style={styles.flex1}>
          <List data={this.state.listData} />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  contentContainer: {
    flex: 1,
    flexDirection: 'column',
    margin: 10
  },
  myProfileContainer: {
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
    alignSelf: 'stretch',
    flexDirection: 'row'
  },
  myProfileText: {
    fontSize: 12,
    marginLeft: 10
  },
  listHeader: {
    justifyContent: 'center',
    alignItems: 'center'
  },
  listHeaderText: {
    fontSize: 30
  },
  flex1: {
    flex: 1
  }
});

export const UI = Home;

export default Home;
