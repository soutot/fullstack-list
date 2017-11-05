import React, { PureComponent } from 'react';
import {
  View,
  ScrollView,
  Text,
  TextInput,
  TouchableHighlight,
  Image,
  Alert,
  KeyboardAvoidingView
} from 'react-native';
import styled from 'styled-components/native';

import AuthenticateUser from '../actions/AuthenticateUser';
import Navigate from '../actions/Navigate';

// const Login = () => {
class Login extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      login: '',
      password: ''
    };
  }

  onTextChange = text => {
    this.setState({ text });
  };

  onLoginButtonPress = () => {
    const { navigate } = this.props.navigation;
    Navigate(navigate, 'Home', { token: '1' });

    // const { login, password } = this.state;
    // AuthenticateUser(login, password)
    // .then((token) => {
    //   Navigate(navigate, 'Home', { token });
    // })
    // .catch(error =>{
    //   alert(error);
    // });
  };

  // create = ({ baseUrl, headers = {} }) => {
  //   // Default options for the Fetch API
  //   // https://developer.mozilla.org/docs/Web/API/Fetch_API/Using_Fetch
  //   const defaults = {
  //     mode: baseUrl ? 'cors' : 'same-origin',
  //     credentials: baseUrl ? 'include' : 'same-origin',
  //     headers: {
  //       ...headers,
  //       Accept: 'application/json',
  //       'Content-Type': 'application/json'
  //     }
  //   };

  //   // Configure Relay environment
  //   const environment = new Environment({
  //     handlerProvider: null,
  //     network: Network.create((
  //       operation,
  //       variables /* cacheConfig, uploadables */
  //     ) =>
  //       fetch(`${baseUrl}/graphql`, {
  //         ...defaults,
  //         method: 'POST',
  //         body: JSON.stringify({
  //           query: operation.text, // GraphQL text from input
  //           variables
  //         })
  //       }).then(x => x.json())
  //     ),
  //     store: new Store(new RecordSource())
  //   });

  //   return {
  //     environment,
  //     fetch: (url, options) =>
  //       fetch(`${baseUrl}${url}`, {
  //         ...defaults,
  //         ...options,
  //         headers: {
  //           ...defaults.headers,
  //           ...(options && options.headers)
  //         }
  //       }),
  //     fetchQuery: fetchQuery.bind(undefined, environment),
  //     commitMutation: commitMutation.bind(undefined, environment),
  //     commitLocalUpdate: commitLocalUpdate.bind(undefined, environment)
  //   };
  // };

  render() {
    // const StyledInput = styled.TextInput`
    //   flex: 1;
    // `;

    // const StyledButton = styled.TouchableHighlight`
    //   backgroundColor: #970053,
    //   flex: 1,
    //   alignSelf: center
    // `;

    return (
      <ScrollView
        contentContainerStyle={{
          flex: 1,
          //  flexDirection: 'column',

          justifyContent: 'space-between'
        }}
      >
        <KeyboardAvoidingView
          behavior="padding"
          keyboardVerticalOffset={65}
          style={{ flex: 1 }}
        >
          <View
            style={{
              justifyContent: 'center',
              alignContent: 'center',
              flex: 2
            }}
          >
            <Image
              style={styles.logo}
              source={require('../images/entria-logo.png')}
            />
            <Text
              style={{
                fontSize: 30,
                alignSelf: 'center'
              }}
            >
              entria
            </Text>
          </View>
          <View
            style={{
              justifyContent: 'center',
              alignContent: 'center',
              flex: 1
            }}
          >
            <TextInput
              style={{
                flex: 1,
                fontSize: 30,
                margin: 10,
                borderBottomColor: '#970053',
                borderBottomWidth: 1
              }}
              placeholder={'login'}
              autoCorrect={false}
              onChangeText={login => this.setState({ login })}
              value={this.state.login}
              underlineColorAndroid="transparent"
            />
            <TextInput
              style={{
                flex: 1,
                fontSize: 30,
                margin: 10,
                borderBottomColor: '#970053',
                borderBottomWidth: 1
              }}
              placeholder={'password'}
              autoCorrect={false}
              onChangeText={password => this.setState({ password })}
              value={this.state.password}
              underlineColorAndroid="transparent"
              secureTextEntry={true}
            />
            <TouchableHighlight
              onPress={() => this.onLoginButtonPress()}
              style={{
                backgroundColor: '#970053',
                flex: 1,
                alignSelf: 'center',
                justifyContent: 'center',
                padding: 10,
                marginBottom: 10,
                borderWidth: 1,
                borderColor: 'rgba(0,0,0,0)',
                borderRadius: 10
              }}
            >
              <Text
                style={{
                  fontSize: 30,
                  alignContent: 'center',
                  justifyContent: 'center',
                  color: '#FFFFFF'
                }}
              >
                Login
              </Text>
            </TouchableHighlight>
          </View>
        </KeyboardAvoidingView>
      </ScrollView>
    );
  }
}

const styles = {
  logo: {
    width: 200,
    height: 200,
    alignSelf: 'center',
    justifyContent: 'center'
  }
};
export default Login;
