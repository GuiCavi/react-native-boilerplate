import React from 'react';
import { Text, Image } from 'react-native';

import ElevatedView from 'react-native-elevated-view';

import MainScreenTemplate from './templates/MainScreenTemplate';

function HomeScreen() {
  return (
    <MainScreenTemplate>
      <Text>HomeScreen</Text>
      <ElevatedView elevation={2} style={{ marginTop: 10 }}>
        <Image
          source={require('../../../assets/images/placeholder.png')}
          style={{ width: 100, height: 100, borderRadius: 50 }}
        />
      </ElevatedView>
    </MainScreenTemplate>
  );
}

export default HomeScreen;
