import React from 'react';
import { Text } from 'react-native';

import AppContainer from './src/containers/AppContainer';

Text.defaultProps.style = { fontFamily: 'Poppins-Regular' };

export default function App() {
  return <AppContainer />;
}
