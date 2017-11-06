import React, { PureComponent } from 'react';
import {
  View,
  ScrollView,
  Text,
  TextInput,
  TouchableHighlight,
  Image,
  Alert,
  KeyboardAvoidingView,
  StyleSheet
} from 'react-native';
import styled from 'styled-components/native';

import AuthenticateUser from '../helpers/AuthenticateUser';
import Navigate from '../helpers/Navigate';

import ContentSection from './common/ContentSection';
import StyledInput from './common/StyledInput';
import StyledButton from './common/StyledButton';

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
    // Navigate(navigate, 'Home', { token: '1' });

    const { login, password } = this.state;
    AuthenticateUser(login, password)
      .then(data => {
        const name = data[0].node.name;
        Navigate(navigate, 'Home', { name });
      })
      .catch(error => {
        alert(error);
      });
  };

  render() {
    return (
      <ScrollView contentContainerStyle={styles.containerStyle}>
        <KeyboardAvoidingView
          behavior="padding"
          keyboardVerticalOffset={65}
          style={styles.keyboard}
        >
          <ContentSection>
            <Image
              style={styles.logo}
              source={require('../images/entria-logo.png')}
            />
            <Text style={styles.logoText}>entria</Text>
          </ContentSection>
          <ContentSection>
            <View style={styles.flex1}>
              <StyledInput
                placeholder={'login'}
                autoCorrect={false}
                onChangeText={login => this.setState({ login })}
                value={this.state.login}
                underlineColorAndroid="transparent"
              />
              <StyledInput
                placeholder={'password'}
                autoCorrect={false}
                onChangeText={password => this.setState({ password })}
                value={this.state.password}
                underlineColorAndroid="transparent"
                secureTextEntry={true}
              />
            </View>
            <View style={styles.buttonContainer}>
              <StyledButton onPress={() => this.onLoginButtonPress()}>
                <Text style={styles.buttonText}>Login</Text>
              </StyledButton>
            </View>
          </ContentSection>
        </KeyboardAvoidingView>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  containerStyle: {
    flex: 1,
    justifyContent: 'space-between'
  },
  keyboard: { flex: 1 },
  logo: {
    width: 200,
    height: 200,
    alignSelf: 'center',
    justifyContent: 'center'
  },
  logoText: {
    fontSize: 30,
    alignSelf: 'center'
  },
  flex1: { flex: 1 },
  buttonContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  buttonText: {
    fontSize: 30,
    alignContent: 'center',
    justifyContent: 'center',
    color: '#FFFFFF'
  }
});

export const UI = Login;

export default Login;
