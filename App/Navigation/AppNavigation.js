import { StackNavigator, TabNavigator } from 'react-navigation'
import CreateEventScreen from '../Containers/CreateEventScreen'
import EventOtherScreen from '../Containers/EventOtherScreen'
import EventUltimateFrisbeeScreen from '../Containers/EventUltimateFrisbeeScreen'
import EventVolleyBallScreen from '../Containers/EventVolleyBallScreen'
import EventTennisScreen from '../Containers/EventTennisScreen'
import EventSoftballScreen from '../Containers/EventSoftballScreen'
import EventSoccerScreen from '../Containers/EventSoccerScreen'
import EventPoolScreen from '../Containers/EventPoolScreen'
import EventLacrosseScreen from '../Containers/EventLacrosseScreen'
import EventIceHockeyScreen from '../Containers/EventIceHockeyScreen'
import EventGolfScreen from '../Containers/EventGolfScreen'
import EventFrisbeeGolfScreen from '../Containers/EventFrisbeeGolfScreen'
import EventFootballScreen from '../Containers/EventFootballScreen'
import EventCricketScreen from '../Containers/EventCricketScreen'
import EventBowlingScreen from '../Containers/EventBowlingScreen'
import EventBasketballScreen from '../Containers/EventBasketballScreen'
import EventBaseballScreen from '../Containers/EventBaseballScreen'
import EventBadmintonScreen from '../Containers/EventBadmintonScreen'
import SettingsScreen from '../Containers/SettingsScreen'
import EventTypesScreen from '../Containers/EventTypesScreen'
import ProfileScreen from '../Containers/ProfileScreen'
import LaunchScreen from '../Containers/LaunchScreen'

import { Images } from '../Themes'
import styles from './Styles/NavigationStyles'

// Manifest of possible screens
const PrimaryNav = StackNavigator({
  CreateEventScreen: { screen: CreateEventScreen },
  EventOtherScreen: { screen: EventOtherScreen },
  EventUltimateFrisbeeScreen: { screen: EventUltimateFrisbeeScreen },
  EventVolleyBallScreen: { screen: EventVolleyBallScreen },
  EventTennisScreen: { screen: EventTennisScreen },
  EventSoftballScreen: { screen: EventSoftballScreen },
  EventSoccerScreen: { screen: EventSoccerScreen },
  EventPoolScreen: { screen: EventPoolScreen },
  EventLacrosseScreen: { screen: EventLacrosseScreen },
  EventIceHockeyScreen: { screen: EventIceHockeyScreen },
  EventGolfScreen: { screen: EventGolfScreen },
  EventFrisbeeGolfScreen: { screen: EventFrisbeeGolfScreen },
  EventFootballScreen: { screen: EventFootballScreen },
  EventCricketScreen: { screen: EventCricketScreen },
  EventBowlingScreen: { screen: EventBowlingScreen },
  EventBasketballScreen: { screen: EventBasketballScreen },
  EventBaseballScreen: { screen: EventBaseballScreen },
  EventBadmintonScreen: { screen: EventBadmintonScreen },
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
