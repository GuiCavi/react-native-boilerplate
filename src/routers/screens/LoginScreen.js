import React, { Component } from 'react';
import { Text, Image, Button } from 'react-native';

import MainScreenTemplate from './templates/MainScreenTemplate';

// import defaultStyle from '../../config/defaultTheme';

class LoginScreen extends Component {
  constructor() {
    super();

    this.state = {};
  }

  render() {
    return (
      <MainScreenTemplate>
        <Text>LoginScreen</Text>

        <Button title="JAHSUDHASUD" onPress={() => this.props.navigation.navigate('Home')} />
      </MainScreenTemplate>
    );
  }
}

export default LoginScreen;
