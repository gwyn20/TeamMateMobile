import { StackNavigator } from 'react-navigation'
import EventTypesScreen from '../Containers/EventTypesScreen'
import ProfileScreen from '../Containers/ProfileScreen'
import LaunchScreen from '../Containers/LaunchScreen'

import styles from './Styles/NavigationStyles'

// Manifest of possible screens
const PrimaryNav = StackNavigator({
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
