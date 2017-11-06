import React from 'react';
import { storiesOf } from '@storybook/react-native';

import { UI as Login } from '../../../src/components/Login';

const login = storiesOf('Login', module);

const props = {};

login.add('UI', <Login {...props} />);
