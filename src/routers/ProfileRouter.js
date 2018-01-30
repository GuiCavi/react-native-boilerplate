import { StackNavigator } from 'react-navigation';

import ProfileScreen from './screens/ProfileScreen';
import ConfigScreen from './screens/ConfigScreen';

import { Navbar } from '../components';

/**
 * ProfileRouter is responsible for all the screens of the profile
 */
const RouteConfigs = {
  Profile: {
    screen: ProfileScreen,
  },
  Settings: {
    screen: ConfigScreen,
  },
};

const StackNavigatorConfig = {
  ...Navbar,
};

const ProfileRouter = StackNavigator(RouteConfigs, StackNavigatorConfig);

export default ProfileRouter;
