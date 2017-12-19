import { StackNavigator, TabNavigator } from 'react-navigation'
import SettingsScreen from '../Containers/SettingsScreen'
import EventTypesScreen from '../Containers/EventTypesScreen'
import ProfileScreen from '../Containers/ProfileScreen'
import LaunchScreen from '../Containers/LaunchScreen'

import { Images } from '../Themes'
import styles from './Styles/NavigationStyles'

// Manifest of possible screens
const PrimaryNav = StackNavigator({
  SettingsScreen: { screen: SettingsScreen },
  EventTypesScreen: { screen: EventTypesScreen },
  ProfileScreen: { screen: ProfileScreen },
  LaunchScreen: { screen: LaunchScreen }
}, {
  // Default config for all screens
  headerMode: 'none',
  initialRouteName: 'LaunchScreen',
  navigationOptions: {
    headerStyle: styles.header
  }
})

export default PrimaryNav

export const Tabs = TabNavigator({
  PROFILE: {
    screen: ProfileScreen,
    
  },
  PLAY: {
    screen: EventTypesScreen,

  },
  SETTINGS: {
    screen: SettingsScreen,
  },
})
