import { StackNavigator } from 'react-navigation';

import HomeScreen from './screens/HomeScreen';

import { Navbar } from '../components';

/**
 * HomeRouter renders the screen related to home, when opening the app
 */
const RouteConfigs = {
  Home: {
    screen: HomeScreen,
  },
};

const StackNavigatorConfig = {
  ...Navbar, // Defatul navbar
};

const HomeRouter = StackNavigator(RouteConfigs, StackNavigatorConfig);

export default HomeRouter;
