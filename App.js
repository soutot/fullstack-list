import React from 'react';
// import { StyleSheet, Text, View } from 'react-native';
// import App from './src/App';

// export default class App extends React.Component {
//   render() {
//     return (
//      <App />
//     );
//   }
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// });

import {
  StackNavigator,
} from 'react-navigation';

import Login from './src/components/Login';
import Home from './src/components/Home';

const App = StackNavigator({
  Login: { screen: Login },
  Home: { screen: Home },
});

export default App;
