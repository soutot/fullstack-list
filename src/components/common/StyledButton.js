import React from 'react';
import { TouchableHighlight } from 'react-native';
import styled from 'styled-components/native';

export default (StyledButton = styled(TouchableHighlight)`
  background-color: #970053;
  align-self: center;
  justify-content: center;
  padding-top: 10;
  padding-bottom: 10;
  padding-left: 10;
  padding-right: 10;
  margin-bottom: 10;
  border-width: 1;
  border-color: rgba(0, 0, 0, 0);
  border-radius: 10;
`);
