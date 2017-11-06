import React from 'react';
import { storiesOf } from '@storybook/react-native';

import { UI as Home } from '../../../src/components/Home';

const home = storiesOf('Home', module);

const props = {};

home.add('UI', <Home {...props} />);
