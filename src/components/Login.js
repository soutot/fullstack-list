import React, { PureComponent } from 'react';
import {
  View,
  ScrollView,
  Text,
  TextInput,
  TouchableHighlight,
  Image,
} from 'react-native';
import styled from 'styled-components/native';

// const Login = () => {
class Login extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      login: '',
      password: '',
    }
  }

  onTextChange = (text) => {
    this.setState({ ...text });
  };

  render() {
    const { navigate } = this.props.navigation;
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
          justifyContent: 'space-between',
        }}
      >
        <View
          style={{
            justifyContent: 'center',
            alignContent: 'center',
            flex: 2,
          }}
        >
          <Image 
            style={styles.logo}
            source={require('../images/entria-logo.png')} 
          />
          <Text
            style={{
              fontSize: 30,
              alignSelf: 'center',
            }}
          >
            entria
          </Text>
        </View>
        <View
          style={{
            justifyContent: 'center',
            alignContent: 'center',
            flex: 1,
          }}
        >
          <TextInput
            style={{ 
              flex: 1,
              fontSize: 30,
              margin: 10,
              borderBottomColor: '#970053',
              borderBottomWidth: 1,
            }}
            placeholder={'login'}
            autoCorrect={false}
            onChangeText={(text) => this.onTextChange(text)}
            value={this.state.login}
            underlineColorAndroid='transparent'
          />
          <TextInput
            style={{ 
              flex: 1,
              fontSize: 30,
              margin: 10,
              borderBottomColor: '#970053',
              borderBottomWidth: 1,
            }}
            placeholder={'password'}
            autoCorrect={false}
            onChangeText={(text) => this.onTextChange(text)}
            value={this.state.password}
            underlineColorAndroid='transparent'
            secureTextEntry={true}
          />
          <TouchableHighlight 
            onPress={() => navigate('Home', { name: 'Jane' })}
            style={{
              backgroundColor: '#970053',
              flex: 1,
              alignSelf: 'center',
              padding: 10,
              marginBottom: 10,
              borderWidth: 1,
              borderColor: 'rgba(0,0,0,0)',
              borderRadius: 10,
            }}
          >
            <Text
              style={{
                fontSize: 30,
                alignContent: 'center',
                justifyContent: 'center',
                color: '#FFFFFF',
              }}
            >
              Login
            </Text>
          </TouchableHighlight>
        </View>
      </ScrollView>
    )
  }
}

const styles = {
  logo: {
    width: 200,
    height: 200,
    alignSelf: 'center',
    justifyContent: 'center',
  },
}
export default Login;
