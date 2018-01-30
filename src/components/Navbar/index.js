import React from 'react';
import { TouchableWithoutFeedback, View, StatusBar, Platform } from 'react-native';

import { Icon } from '@shoutem/ui';

import Colors from '../../config/colors';

if (Platform.OS === 'android') StatusBar.setBackgroundColor(Colors.theme.primaryDarkColor);

export default {
  navigationOptions: ({ navigation }) => ({
    headerStyle: {
      paddingHorizontal: 16,
      backgroundColor: Colors.theme.primaryColor,
    },
    headerLeft: (
      <TouchableWithoutFeedback onPress={() => navigation.navigate('DrawerOpen')}>
        <Icon name="sidebar" style={{ color: 'white', fontSize: 28 }} />
      </TouchableWithoutFeedback>
    ),
    headerRight: <View />,
    headerTitle: 'Project',
    headerTitleStyle: {
      alignSelf: 'center',
      fontFamily: 'Courgette-Regular',
      fontWeight: '200',
      color: 'white',
    },
  }),
};
