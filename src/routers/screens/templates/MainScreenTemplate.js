import React, { Component } from 'react';
import { View, ScrollView } from 'react-native';

import LinearGradient from 'react-native-linear-gradient';

import defaultStyle from '../../../config/defaultTheme';

class MainScreenTemplate extends Component {
  constructor() {
    super();

    this.state = {};
  }

  render() {
    return (
      <View style={[{ flex: 1, position: 'relative' }]}>
        {/* <LinearGradient
          colors={['rgba(251, 194, 235, 1)', 'rgba(161, 140, 209, 1)']}
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
          }}
        /> */}
        <ScrollView style={[{ flex: 1 }]} contentContainerStyle={defaultStyle.mainSpacing}>
          {this.props.children}
        </ScrollView>
      </View>
    );
  }
}

export default MainScreenTemplate;
