import { StyleSheet } from 'react-native'
import { Metrics, ApplicationStyles } from '../../Themes/'

export default StyleSheet.create({
  ...ApplicationStyles.screen,
  container: {
    marginTop: 20,
    paddingBottom: Metrics.baseMargin
  },
  eventIcon: {
    flexGrow: 1, 
    justifyContent: 'center', 
    alignItems: 'center', 
    flexDirection: 'row'
  },
  
})
