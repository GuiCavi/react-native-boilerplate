import React from 'react';

import { DrawerNavigator } from 'react-navigation';

import { Icon } from '@shoutem/ui';
import MaterialIcon from 'react-native-vector-icons/MaterialCommunityIcons';

import HomeRouter from './HomeRouter';
import ProfileRouter from './ProfileRouter';
import LoginScreen from './screens/LoginScreen';

import DrawerContent from './config/DrawerContent';

import Colors from '../config/colors';

/**
 * MainRouter is the router which is opened when app starts
 */
const RouteConfigs = {
  Home: {
    screen: HomeRouter,
    navigationOptions: {
      drawerIcon: ({ tintColor }) => <Icon name="home" style={{ color: tintColor }} />,
    },
  },
  Profile: {
    screen: ProfileRouter,
    navigationOptions: {
      drawerIcon: ({ tintColor }) => <Icon name="user-profile" style={{ color: tintColor }} />,
    },
  },
  Login: {
    screen: LoginScreen,
    navigationOptions: {
      title: 'Exit',
      drawerLockMode: 'locked-closed',
      drawerIcon: ({ tintColor }) => (
        <MaterialIcon name="logout" style={{ color: tintColor }} size={24} />
      ),
    },
  },
};

const DrawerNavigatorConfig = {
  drawerOpenRoute: 'DrawerOpen',
  drawerCloseRoute: 'DrawerClose',
  drawerToggleRoute: 'DrawerToggle',
  contentComponent: DrawerContent,
  initialRouteName: 'Login',
  contentOptions: {
    activeTintColor: Colors.theme.primaryColor,
    itemStyle: {
      // height: 64,
    },
  },
};

const MainRouter = DrawerNavigator(RouteConfigs, DrawerNavigatorConfig);

export default MainRouter;
