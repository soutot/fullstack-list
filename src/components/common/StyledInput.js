import React from 'react';
import { TextInput } from 'react-native';
import styled from 'styled-components/native';

export default (StyledInput = styled(TextInput)`
  flex: 1;
  font-size: 24;
  margin-top: 5;
  margin-bottom: 5;
  margin-left: 10;
  margin-right: 10;
  border-bottom-color: #970053;
  border-bottom-width: 1;
`);
